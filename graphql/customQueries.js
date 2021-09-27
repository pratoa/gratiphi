export const getLocationForSponsor = /* GraphQL */ `
  query GetLocationsWithNoGratification($filter: ModelLocationFilterInput) {
    listLocations(filter: $filter) {
      items {
        id
        identifier
        createdAt
        name
        donations(filter: { gratificationId: { eq: "NONE" } }) {
          items {
            id
            amount
          }
        }
      }
    }
  }
`;

export const getDoneesAtLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      donees {
        items {
          id
          identifier
          firstName
          lastName
          birthDate
          smallBiography
          fullBiography
          profilePhoto
          sponsorId
          locationId
          donations(filter: { gratificationId: { eq: "NONE" } }) {
            items {
              id
              amount
            }
          }
        }
      }
    }
  }
`;

export const getGratificationHistoryByDoneeId = /* GraphQL */ `
  query GetGratificationsForDonee($filter: ModelGratificationFilterInput) {
    listGratifications(filter: $filter) {
      items {
        id
        createdAt
        gratificationUrl
      }
    }
  }
`;
