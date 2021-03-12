const axios = require("axios");
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;

const stripe = require("stripe")(
  "sk_test_51ILbpBAx0O8AnxyhWB09dUZwW8yIarhSqMlV5EBdZLkKxAEQyRve0jUp6Aj8o3QiLSiNIBPGVjcF8P1kJXjGfzns00E2k7ABRK"
);

const getUser = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      stripeID
    }
  }
`;

const updateUser = gql`
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      stripeID
    }
  }
`;

async function createStripeUser(email) {
  const customer = await stripe.customers.create({
    email: email,
  });
  console.log("STRIPE_USER", customer);
  return customer;
}

async function getUserStripeId(userId) {
  console.log(userId);
  console.log(typeof userId);
  try {
    const graphqlData = await axios({
      url:
        "https://3zuvupzfcnbhdmg5zuyv2cqb5m.appsync-api.us-east-1.amazonaws.com/graphql",
      method: "post",
      headers: {
        "x-api-key": "da2-5tz74lmo6rehrhp5bjicpcqdqm",
      },
      data: {
        query: print(getUser),
        variables: {
          id: userId,
        },
      },
    });
    console.log("GET STRIPE ID: ", graphqlData.data);
    return graphqlData.data.data.getUser.stripeID;
  } catch (err) {
    console.log("ERROR GETTING STRIPEID: ", err);
  }
}

async function addStripeIdToUser(userId, stripeId) {
  const graphqlData = await axios({
    url:
      "https://3zuvupzfcnbhdmg5zuyv2cqb5m.appsync-api.us-east-1.amazonaws.com/graphql",
    method: "post",
    headers: {
      "x-api-key": "da2-5tz74lmo6rehrhp5bjicpcqdqm",
    },
    data: {
      query: print(updateUser),
      variables: {
        input: {
          id: userId,
          stripeID: stripeId,
        },
      },
    },
  });
  console.log("updateUserData", graphqlData);
}

async function createPaymentIntent(stripeUserId, amount) {
  return await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: "accept_a_payment" },
    customer: stripeUserId,
  });
}

exports.handler = async (event, context, callback) => {
  console.log("Event", event);
  try {
    var userStripeId = await getUserStripeId(event.arguments.userId);

    console.log("BEFORE", userStripeId);

    console.log("IS THIS TRUE??", userStripeId == null);

    if (userStripeId == null) {
      const stripeUser = await createStripeUser(event.arguments.email);
      userStripeId = stripeUser.id;
      await addStripeIdToUser(event.arguments.userId, userStripeId);
      console.log("AFTER", userStripeId);
    }

    const paymentIntent = await createPaymentIntent(
      userStripeId,
      event.arguments.amount
    );
    return paymentIntent.client_secret;
  } catch (err) {
    callback(err);
  }
};
