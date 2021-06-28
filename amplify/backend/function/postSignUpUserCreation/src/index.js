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
const moment = require("moment");
const API_KEY = process.env.API_GRATIPHIAPI_GRAPHQLAPIKEYOUTPUT;
const API_ENDPOINT = process.env.API_GRATIPHIAPI_GRAPHQLAPIENDPOINTOUTPUT;

const createUser = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      lastName
      email
      dateOfBirth
    }
  }
`;

exports.handler = async (event, context, callback) => {
  console.log("Event", event);
  console.log("Context", context);
  console.log("DATE", event.request.userAttributes["custom:birth_date"]);
  console.log(
    "DATE TYPE",
    typeof event.request.userAttributes["custom:birth_date"]
  );

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
      url: API_ENDPOINT,
      method: "post",
      headers: {
        "x-api-key": API_KEY,
      },
      data: {
        query: print(createUser),
        variables: {
          input: {
            id: event.request.userAttributes.sub,
            name: event.request.userAttributes["custom:first_name"],
            lastName: event.request.userAttributes["custom:last_name"],
            email: event.request.userAttributes.email,
            dateOfBirth: event.request.userAttributes["custom:birth_date"],
          },
        },
      },
    });

    console.log(graphqlData.data);
    console.log("Sucessfully saved user!");
    callback(null, event);
  } catch (err) {
    callback(err);
  }
};
