export const getLocationForSponsor = /* GraphQL */ `
  query GetSponsor($id: ID!) {
    getSponsor(id: $id) {
      id
      name
      logo
      identifier
      locations {
        items {
          id
          identifier
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
          identifier
          firstName
          lastName
          birthDate
          smallBiography
          fullBiography
          profilePhoto
          sponsorId
          locationId
        }
      }
    }
  }
`;

export const getDonationHistoryByDoneeId = /* GraphQL */ `
  query getDonationHistoryByDoneeId($filter: ModelDonationsFilterInput) {
    listDonationss(filter: $filter) {
      items {
        amount
        createdAt
        isGratificationSent
        id
        user {
          email
        }
      }
    }
  }
`;
