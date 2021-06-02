/* Amplify Params - DO NOT EDIT
	API_GRATIPHIAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_GRATIPHIAPI_GRAPHQLAPIIDOUTPUT
	API_GRATIPHIAPI_GRAPHQLAPIKEYOUTPUT
	AUTH_GRATIPHI02FF5042_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");
var cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
});
const axios = require("axios");
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;

const createUser = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      lastName
      email
    }
  }
`;

exports.handler = async (event, context, callback) => {
  console.log("Event", event);
  console.log("Context", context);

  try {
    //Set group
    const groupParams = {
      GroupName: "gratiphiUser",
      UserPoolId: event.userPoolId,
      Username: event.userName,
    };

    cognitoIdentityServiceProvider.adminAddUserToGroup(
      groupParams,
      function (err, data) {
        console.log(groupParams);
        if (err) {
          callback(err);
        }
      }
    );

    console.log("Added user to group successfully!");

    //Create user in db
    const graphqlData = await axios({
      url:
        "https://3zuvupzfcnbhdmg5zuyv2cqb5m.appsync-api.us-east-1.amazonaws.com/graphql",
      method: "post",
      headers: {
        "x-api-key": "da2-wiksudagavbgveax5bupgn7o7a",
      },
      data: {
        query: print(createUser),
        variables: {
          input: {
            id: event.request.userAttributes.sub,
            name: "Andres",
            lastName: "Prato",
            email: event.request.userAttributes.email,
          },
        },
      },
    });

    console.log(graphqlData);
    console.log("Sucessfully saved user!");
    callback(null, event);
  } catch (err) {
    callback(err);
  }
};
