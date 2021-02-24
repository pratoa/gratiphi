const stripe = require("stripe")(
  "sk_test_51ILbpBAx0O8AnxyhWB09dUZwW8yIarhSqMlV5EBdZLkKxAEQyRve0jUp6Aj8o3QiLSiNIBPGVjcF8P1kJXjGfzns00E2k7ABRK"
);

async function createPaymentIntent() {
  return await stripe.paymentIntents.create({
    amount: 1099,
    currency: "usd",
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: "accept_a_payment" },
  });
}

exports.handler = async (event) => {
  // TODO implement
  const paymentIntent = await createPaymentIntent();
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*"
    //  },
    clientSecret: paymentIntent.client_secret,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
