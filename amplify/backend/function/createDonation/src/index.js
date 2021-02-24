const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

const DONATION_TABLE = "Donations-tn5v3rfakvavnlnyhymodjmnje-dev";
// const DONATION_TYPE = "Order";
// const BOOK_ORDER_TABLE = "<book_order_table name>";
// const BOOK_ORDER_TYPE = "BookOrder";

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

// const createBookOrder = async (payload) => {
//   let bookOrders = [];
//   for (i = 0; i < payload.cart.length; i++) {
//     const cartItem = payload.cart[i];
//     bookOrders.push({
//       PutRequest: {
//         Item: {
//           id: uuidv4(),
//           __typename: BOOK_ORDER_TYPE,
//           book_id: cartItem.id,
//           order_id: payload.order_id,
//           customer: payload.email,
//           createdAt: new Date().toISOString(),
//           updatedAt: new Date().toISOString()
//         }
//       }
//     });
//   }
//   let params = {
//     RequestItems: {}
//   };
//   params["RequestItems"][BOOK_ORDER_TABLE] = bookOrders;
//   console.log(params);
//   await documentClient.batchWrite(params).promise();
// };

/*
 * Get order details from processPayment lambda
 * Create an order
 * Link books to the order - Users can see the past orders and admins can view orders by user
 * Email the invoice (Will be added later)
 */
exports.handler = async (event) => {
  try {
    let payload = event.prev.result;
    payload.donationID = uuidv4();

    // create a new order
    await createDonation(payload);

    // links books with the order
    // await createBookOrder(payload);

    // Note - You may add another function to email the invoice to the user

    return "SUCCESS";
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
};

// exports.handler = async (event) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*"
//     //  },
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };
