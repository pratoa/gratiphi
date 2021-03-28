const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

const DONATION_TABLE = "Donations-tn5v3rfakvavnlnyhymodjmnje-dev";

const createDonation = gql`
  mutation createDonation($input: CreateDonationInput!) {
    createDonation(input: $input) {
      id
      name
      lastName
      email
    }
  }
`;

const createDonation = async (payload) => {
  const { donationID, email, amount } = payload;
  var params = {
    TableName: DONATION_TABLE,
    Item: {
      id: donationID,
      __typename: ORDER_TYPE,
      customer: email,
      amount: amount,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  };
  console.log(params);
  await documentClient.put(params).promise();
};

exports.handler = async (event) => {
  try {
    let payload = event.prev.result;
    payload.donationID = uuidv4();

    // create a new order
    await createDonation(payload);

    return "SUCCESS";
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
};