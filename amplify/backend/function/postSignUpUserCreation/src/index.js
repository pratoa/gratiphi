/* Amplify Params - DO NOT EDIT
	API_GRATIPHIAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_GRATIPHIAPI_GRAPHQLAPIIDOUTPUT
	API_GRATIPHIAPI_GRAPHQLAPIKEYOUTPUT
	AUTH_GRATIPHI02FF5042_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
var aws = require("aws-sdk");
var ddb = new AWS.DynamoDB({ apiVersion: "2012-10-17" });

var params = {
  TableName: "User-tn5v3rfakvavnlnyhymodjmnje-dev",
};

exports.handler = async (event, context, callback) => {
  console.log("Event", event);
  console.log("Context", context);

  callback(null, event);
};

async function createPaymentIntent() {
  return await stripe.paymentIntents.create({
    amount: 1099,
    currency: "usd",
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: "accept_a_payment" },
  });
}

exports.handler = async (event) => {
  const paymentIntent = await createPaymentIntent();
  return paymentIntent.client_secret;
};
