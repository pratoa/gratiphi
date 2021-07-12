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
        createdAt
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

exports.handler = async (event) => {
  //get donations that don't have a gratification ----------
  //loop through each ----------
  //  check if there is a gratification in S3 by doneeId
  //      if yes, CONTINUE
  //      if no, BREAK
  //  check if there is a previous donation by same user to same donee
  //      if yes, check if image is the same
  //          if image is the same BREAK
  //          if image is different CONTINUE
  //      if no, CONTINUE
  //  send gratification to user
  //  save gratification photo url in the donation and mark as completed

  try {
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
    // console.log(donations);
    // await donations.forEach(processDonation);
    for (const donation of donations) {
<<<<<<< Updated upstream
      console.log("START OF PROCESSING");
      await processDonation(donation);
      console.log("END OF PROCESSING");
=======
      console.log("START OF PROCESSING FOR DONATIONID: ", donation.id);
      if (moment(donation.createdAt).add(5, "days") < moment()) {
        await processDonation(donation);
      }
      console.log("END OF PROCESSING FOR DONATIONID: ", donation.id);
>>>>>>> Stashed changes
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

  var listParams = {
    Bucket: BUCKET_NAME,
    Delimiter: "/",
    Prefix: `public/${sponsorIdentifier}/${locationIdentifier}-${locationId}/${doneeIdentifier}-${doneeId}/${doneeIdentifier}`,
  };
  var s3List = await s3.listObjects(listParams).promise();

  if (s3List.Contents === undefined || s3List.Contents.length == 0) {
    return;
  }

  var imageUrl = `https://${BUCKET_NAME}.s3.amazonaws.com/${s3List.Contents[0].Key}`;
  console.log("IMAGE URL: ", imageUrl);

  if (!imageUrl) {
    return;
  }

  var email = await sendEmail(donation, imageUrl);
  console.log("EMAIL: ", email);

  var updatedDonation = await updateDonation(donation, imageUrl);
  console.log("UPDATED DONATION: ", updatedDonation);
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
