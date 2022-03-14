/* Amplify Params - DO NOT EDIT
	API_GRATIPHIAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_GRATIPHIAPI_GRAPHQLAPIIDOUTPUT
	API_GRATIPHIAPI_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const ses = new AWS.SES({ region: "us-east-1" });

async function sendEmail(donee, userName, userEmail, amount) {
  const htmlBody = `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        .header {
          top: 0px;
          height: 75px;
          width: 100%;
          background-color: rgb(40, 79, 150);
        }
  
        .logo {
          object-fit: contain;
          height: 100%;
        }
  
        p {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <img
          src="https://gratification-proof114704-dev.s3.amazonaws.com/public/resources/gratiphi-logo.png"
          class="logo"
          alt="logo"
        />
      </div>
      <p>Hi ${userName},</p>
      <p>
        Thank you for your donation of $${
          amount / 100
        }! ${donee} will be grateful for this. Expect a Gratification photo in a few days!
        <br>
        <br>
        Gratiphi Team.
      </p>
    </body>
  </html>
  `;

  const textBody = `
    Hi ${userName},
    ...
  `;

  // Create sendEmail params
  const params = {
    Destination: {
      ToAddresses: [userEmail],
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
        Data: `Thank you for your donation to: ${donee}`,
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
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  try {
    var email = await sendEmail(
      event.arguments.doneeName,
      event.arguments.userFirstName,
      event.arguments.userEmail,
      event.arguments.amount
    );
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify("Hello from Lambda!"),
  };
};
