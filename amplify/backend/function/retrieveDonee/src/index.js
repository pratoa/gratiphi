/* Amplify Params - DO NOT EDIT
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
const API_KEY = process.env.API_GRATIPHIAPI_GRAPHQLAPIKEYOUTPUT;
const API_ENDPOINT = process.env.API_GRATIPHIAPI_GRAPHQLAPIENDPOINTOUTPUT;
const BUCKET_NAME = process.env.STORAGE_GRATIPROOF_BUCKETNAME;

const s3 = new AWS.S3();

exports.handler = async (event) => {
  // TODO implement
  const doneeId = event.arguments.doneeId;
  console.log("BUCKET NAME: ", BUCKET_NAME);
  try {
    //get donee
    const graphqlData = await axios({
      url: API_ENDPOINT,
      method: "post",
      headers: {
        "x-api-key": API_KEY,
      },
      data: {
        query: print(getDoneeById),
        variables: {
          id: doneeId,
        },
      },
    });
    var donee = graphqlData.data.data.getDonee;

    console.log("DONEE: ", donee);
    //get image s3 url

    var listParams = {
      Bucket: BUCKET_NAME,
      Key: `public/${donee.profilePhoto}`,
    };
    console.log("BEFORE?");
    const presignedUrl = s3.getSignedUrl("getObject", listParams);

    //return donee obj
    donee.profilePhotoUrl = presignedUrl;
    return donee;
  } catch (err) {
    return err;
  }

  //   const response = {
  //     statusCode: 200,
  //     //  Uncomment below to enable CORS requests
  //     //  headers: {
  //     //      "Access-Control-Allow-Origin": "*"
  //     //  },
  //     body: JSON.stringify("Hello from Lambda!"),
  //   };
  //   return response;
};

const getDoneeById = gql`
  query getDonee($id: ID!) {
    getDonee(id: $id) {
      id
      firstName
      lastName
      birthDate
      identifier
      profilePhoto
      location {
        id
        name
        identifier
      }
      sponsor {
        id
        name
        identifier
      }
      createdAt
    }
  }
`;
