/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaymentIntent = /* GraphQL */ `
  query CreatePaymentIntent {
    createPaymentIntent
  }
`;
export const getSponsor = /* GraphQL */ `
  query GetSponsor($id: ID!) {
    getSponsor(id: $id) {
      id
      name
      logo
      locations
      donee {
        items {
          id
          firstName
          lastName
          smallBiography
          fullBiography
          profilePhoto
          sponsorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSponsors = /* GraphQL */ `
  query ListSponsors(
    $filter: ModelSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        logo
        locations
        donee {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      lastName
      email
      stripeID
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lastName
        email
        stripeID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDonee = /* GraphQL */ `
  query GetDonee($id: ID!) {
    getDonee(id: $id) {
      id
      firstName
      lastName
      location {
        id
        name
        createdAt
        updatedAt
      }
      smallBiography
      fullBiography
      profilePhoto
      sponsorID
      sponsor {
        id
        name
        logo
        locations
        donee {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDonees = /* GraphQL */ `
  query ListDonees(
    $filter: ModelDoneeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        location {
          id
          name
          createdAt
          updatedAt
        }
        smallBiography
        fullBiography
        profilePhoto
        sponsorID
        sponsor {
          id
          name
          logo
          locations
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDonations = /* GraphQL */ `
  query GetDonations($id: ID!) {
    getDonations(id: $id) {
      id
      amount
      gratificationPhoto
      createdAt
      updatedAt
    }
  }
`;
export const listDonationss = /* GraphQL */ `
  query ListDonationss(
    $filter: ModelDonationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonationss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        gratificationPhoto
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
