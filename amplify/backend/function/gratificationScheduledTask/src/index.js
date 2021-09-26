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
const moment = require("moment");
const API_KEY = process.env.API_GRATIPHIAPI_GRAPHQLAPIKEYOUTPUT;
const API_ENDPOINT = process.env.API_GRATIPHIAPI_GRAPHQLAPIENDPOINTOUTPUT;
const BUCKET_NAME = process.env.STORAGE_GRATIPROOF_BUCKETNAME;

const s3 = new AWS.S3();
const ses = new AWS.SES({ region: "us-east-1" });

const getDonationsEligibleToProcess = gql`
  query listDonations($filter: ModelDonationFilterInput) {
    listDonations(filter: $filter) {
      items {
        id
        userId
        doneeId
        amount
        donee {
          id
          firstName
          lastName
          birthDate
          identifier
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
        location {
          id
          name
          identifier
        }
        createdAt
      }
    }
  }
`;

const updateDonationGraph = gql`
  mutation ($donation: UpdateDonationInput!) {
    updateDonation(input: $donation) {
      id
      userId
      doneeId
      amount
      gratificationId
    }
  }
`;

const getDonationByUserDoneeAndGratification = gql`
  query listDonations($filter: ModelDonationFilterInput) {
    listDonations(filter: $filter) {
      items {
        id
        userId
        doneeId
        amount
        gratificationId
      }
    }
  }
`;

const getGratificatioByGratificationUrl = gql`
  query gratificationByUrl($gratificationUrl: String) {
    gratificationByUrl(gratificationUrl: $gratificationUrl) {
      items {
        id
        gratificationUrl
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
            gratificationId: {
              eq: "NONE",
            },
          },
        },
      },
    });

    console.log("THIS IS DE DATA: ", graphqlData.data);
    var donations = graphqlData.data.data.listDonations.items;

    if (donations.length == 0) {
      return;
    }

    // Loop through each donation
    for (const donation of donations) {
      console.log("START OF PROCESSING FOR DONATION: ", donation);
      //process donation if it has 5 days of being created
      if (moment(donation.createdAt).add(5, "days") < moment()) {
        //process each donation
        await processDonation(donation);
      }
      console.log("END OF PROCESSING FOR DONATIONID: ", donation.id);
    }
  } catch (err) {
    console.log("ERROR: ", err);
  }
};

async function processDonation(donation) {
  const sponsorIdentifier = donation.donee.sponsor.identifier;
  const locationIdentifier = donation.location.identifier;
  const locationId = donation.location.id;
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

  var gratifications = s3List.Contents;
  var dates = getGratificationDates(gratifications);
  const lastDate = dates[0].toISOString().split("T")[0];

  var imageUrl = getImageUrl(
    sponsorIdentifier,
    locationIdentifier,
    locationId,
    doneeIdentifier,
    doneeId,
    lastDate
  );

  // Check if there is a donation with the latest gratification photo

  //Get gratificationId usando el gratificationPath
  const gratificationData = await axios({
    url: API_ENDPOINT,
    method: "post",
    headers: {
      "x-api-key": API_KEY,
    },
    data: {
      query: print(getGratificatioByGratificationUrl),
      variables: {
        gratificationUrl: imageUrl,
      },
    },
  });
  console.log("IMAGE URL: ", imageUrl);
  console.log(
    "GRATIFICATION: ",
    gratificationData.data.data.gratificationByUrl
  );
  // gratification.data?
  if (
    gratificationData.data.errors ||
    gratificationData.data.data.gratificationByUrl.items.length == 0
  ) {
    return;
  }
  const gratification = gratificationData.data.data.gratificationByUrl.items[0];
  const graphqlData2 = await axios({
    url: API_ENDPOINT,
    method: "post",
    headers: {
      "x-api-key": API_KEY,
    },
    data: {
      query: print(getDonationByUserDoneeAndGratification),
      variables: {
        filter: {
          userId: {
            eq: userId,
          },
          doneeId: {
            eq: doneeId,
          },
          gratificationId: {
            eq: gratification.gratificationId,
          },
        },
      },
    },
  });

  console.log("PREV DONATIONS: ", graphqlData2.data.data);
  // if there are prev donations with latest gratification, then don't send
  if (graphqlData2.data.data.listDonations != null) {
    console.log("No mandar foto");
    return;
  }

  // send email
  var email = await sendEmail(donation, imageUrl);
  console.log("EMAIL: ", email);

  // update donation
  // if (email.sucess){}
  var updatedDonation = await updateDonation(donation, gratification.id);
  console.log("UPDATED DONATION: ", updatedDonation);
}

function getImageUrl(
  sponsorIdentifier,
  locationIdentifier,
  locationId,
  doneeIdentifier,
  doneeId,
  date
) {
  //https://${BUCKET_NAME}.s3.amazonaws.com/public/
  return `${sponsorIdentifier}/${locationIdentifier}-${locationId}/${doneeIdentifier}-${doneeId}/${doneeIdentifier}_${date}.jpeg`;
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

async function updateDonation(donation, gratificationId) {
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
            gratificationId: gratificationId,
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
