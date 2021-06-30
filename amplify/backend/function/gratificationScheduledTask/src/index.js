/* Amplify Params - DO NOT EDIT
	API_GRATIPHIAPI_DONATIONSTABLE_ARN
	API_GRATIPHIAPI_DONATIONSTABLE_NAME
	API_GRATIPHIAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_GRATIPHIAPI_GRAPHQLAPIIDOUTPUT
	API_GRATIPHIAPI_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
	STORAGE_GRATIPROOF_BUCKETNAME
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const axios = require("axios");
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;
const API_KEY = process.env.API_GRATIPHIAPI_GRAPHQLAPIKEYOUTPUT;
const API_ENDPOINT = process.env.API_GRATIPHIAPI_GRAPHQLAPIENDPOINTOUTPUT;
const BUCKET_NAME = process.env.STORAGE_GRATIPROOF_BUCKETNAME;

const s3 = new AWS.S3();
const ses = new AWS.SES({ region: "us-east-1" });

const getDonationsEligibleToProcess = gql`
  query listDonationss($filter: ModelDonationsFilterInput) {
    listDonationss(filter: $filter) {
      items {
        id
        userId
        doneeId
        amount
        isGratificationSent
        gratificationPhoto
        donee {
          id
          firstName
          lastName
          birthDate
          identifier
          location {
            id
            name
            identifier
          }
          sponsor {
            id
            identifier
          }
        }
        user {
          id
          name
          email
        }
      }
    }
  }
`;

const updateDonationGraph = gql`
  mutation ($donation: UpdateDonationsInput!) {
    updateDonations(input: $donation) {
      id
      userId
      doneeId
      amount
      isGratificationSent
      gratificationPhoto
    }
  }
`;

const getDonationsByUserAndDonee = gql`
  query listDonationss($filter: ModelDonationsFilterInput) {
    listDonationss(filter: $filter) {
      items {
        id
        userId
        doneeId
        amount
        isGratificationSent
        gratificationPhoto
      }
    }
  }
`;

exports.handler = async (event) => {
  try {
    // Get eligible donations
    const graphqlData = await axios({
      url: API_ENDPOINT,
      method: "post",
      headers: {
        "x-api-key": API_KEY,
      },
      data: {
        query: print(getDonationsEligibleToProcess),
        variables: {
          filter: {
            isGratificationSent: {
              eq: false,
            },
            gratificationPhoto: {
              eq: null,
            },
          },
        },
      },
    });
    var donations = graphqlData.data.data.listDonationss.items;

    // Loop through each donation
    for (const donation of donations) {
      console.log("START OF PROCESSING FOR DONATIONID: ", donation.id);
      await processDonation(donation);
      console.log("END OF PROCESSING FOR DONATIONID: ", donation.id);
    }
  } catch (err) {
    console.log("ERROR: ", err);
  }
};

async function processDonation(donation) {
  const sponsorIdentifier = donation.donee.sponsor.identifier;
  const locationIdentifier = donation.donee.location.identifier;
  const locationId = donation.donee.location.id;
  const doneeIdentifier = donation.donee.identifier;
  const doneeId = donation.donee.id;
  const userId = donation.user.id;

  var listParams = {
    Bucket: BUCKET_NAME,
    Prefix: `public/${sponsorIdentifier}/${locationIdentifier}-${locationId}/${doneeIdentifier}-${doneeId}/${doneeIdentifier}_`,
  };

  // Get all gratification photos for donee
  var s3List = await s3.listObjects(listParams).promise();

  // If there are no gratification photos stop
  if (s3List.Contents === undefined || s3List.Contents.length == 0) {
    return;
  }

  // Fetch all donations made by the user to the same donee
  const graphqlData2 = await axios({
    url: API_ENDPOINT,
    method: "post",
    headers: {
      "x-api-key": API_KEY,
    },
    data: {
      query: print(getDonationsByUserAndDonee),
      variables: {
        filter: {
          userId: {
            eq: userId,
          },
          doneeId: {
            eq: doneeId,
          },
        },
      },
    },
  });

  // if there are no prev donations stop. This should never happen, since we are looping through one technically
  if (graphqlData2.data.data == null) {
    return;
  }

  var previosDonations = graphqlData2.data.data.listDonationss.items;
  var gratifications = s3List.Contents;
  var dates = getGratificationDates(gratifications);
  const lastDate = dates[0].toISOString().split("T")[0];

  // If there is only one prev donation (meaning current donation in loop)
  if (previosDonations.length < 2) {
    var imageUrl = getImageUrl(
      sponsorIdentifier,
      locationIdentifier,
      locationId,
      doneeIdentifier,
      doneeId,
      lastDate
    );
    console.log("IMAGE URL: ", imageUrl);

    // send email
    var email = await sendEmail(donation, imageUrl);
    console.log("EMAIL: ", email);

    // update donation
    var updatedDonation = await updateDonation(donation, imageUrl);
    console.log("UPDATED DONATION: ", updatedDonation);
  } else {
    // if there are more than 1 previous donations
    var counter = 0;

    // loop through each and check if latest gratification photo added has been sent alreay
    for (const donation of previosDonations) {
      if (donation.gratificationPhoto) {
        if (donation.gratificationPhoto.includes(lastDate)) {
          counter++;
        }
      }
    }

    // if it latest gratification hasn't been sent, send email and update donation
    if (counter == 0) {
      var imageUrl = getImageUrl(
        sponsorIdentifier,
        locationIdentifier,
        locationId,
        doneeIdentifier,
        doneeId,
        lastDate
      );
      console.log("COUNTER = 0");
      console.log("IMAGE URL: ", imageUrl);

      var email = await sendEmail(donation, imageUrl);
      console.log("EMAIL: ", email);

      var updatedDonation = await updateDonation(donation, imageUrl);
      console.log("UPDATED DONATION: ", updatedDonation);
    } else {
      //if the latest gratification has been sent, then stop
      return;
    }
  }
}

function getImageUrl(
  sponsorIdentifier,
  locationIdentifier,
  locationId,
  doneeIdentifier,
  doneeId,
  date
) {
  return `https://${BUCKET_NAME}.s3.amazonaws.com/public/${sponsorIdentifier}/${locationIdentifier}-${locationId}/${doneeIdentifier}-${doneeId}/${doneeIdentifier}_${date}.jpg`;
}

function getGratificationDates(gratifications) {
  var dates = [];
  for (const grat of gratifications) {
    var date = grat.Key.split("_").pop().split(".")[0];
    dates.push(new Date(date));
  }
  const sortedDates = dates.sort((a, b) => b - a);
  return sortedDates;
}

async function updateDonation(donation, imageUrl) {
  try {
    const graphqlData = await axios({
      url: API_ENDPOINT,
      method: "post",
      headers: {
        "x-api-key": API_KEY,
      },
      data: {
        query: print(updateDonationGraph),
        variables: {
          donation: {
            id: donation.id,
            userId: donation.userId,
            doneeId: donation.doneeId,
            amount: donation.amount,
            isGratificationSent: true,
            gratificationPhoto: imageUrl,
          },
        },
      },
    });
    return graphqlData.data;
  } catch (err) {
    console.log("ERROR: ", err);
  }
}

async function sendEmail(donation, imageUrl) {
  const htmlBody = `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <p>Hi ${donation.user.name},</p>
        <p>Thank you for your donation! You helped ${donation.donee.firstName} have a few meals, and for that we want you to feel good and send you this!</p>
        <img src="${imageUrl}" alt="gratificationPhoto" width="500" height="600">
      </body>
    </html>
  `;

  const textBody = `
    Hi ${donation.user.name},
    ...
  `;

  // Create sendEmail params
  const params = {
    Destination: {
      ToAddresses: [donation.user.email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlBody,
        },
        Text: {
          Charset: "UTF-8",
          Data: textBody,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Thank you for your donation to: ${donation.donee.firstName}`,
      },
    },
    Source: "Andres from Gratiphi <prato.andres@gmail.com>",
  };

  // Create the promise and SES service object
  const sendPromise = ses.sendEmail(params).promise();

  // Handle promise's fulfilled/rejected states
  sendPromise
    .then((data) => {
      console.log(data.MessageId);
      // context.done(null, "Success");
    })
    .catch((err) => {
      console.error(err, err.stack);
      // context.done(null, "Failed");
    });

  return sendPromise;
}
