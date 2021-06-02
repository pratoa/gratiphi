export const getLocationForSponsor = /* GraphQL */ `
  query GetSponsor($id: ID!) {
    getSponsor(id: $id) {
      id
      name
      logo
      locations {
        items {
          id
          name
          sponsorId
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
          firstName
          lastName
          birthDate
          smallBiography
          fullBiography
          profilePhoto
          sponsorId
          locationId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
