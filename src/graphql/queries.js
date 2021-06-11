/* eslint-disable */

export const listDonees = /* GraphQL */ `
  query ListDonees(
    $filter: ModelDoneeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        sponsorId
        location {
          id
          name
        }
        questionAnswer {
          items {
            id
            question {
              question
            }
            answer
          }
        }
      }
      nextToken
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
        createdAt
        isGratificationSent
        gratificationPhoto
        donee {
          firstName
          lastName
          birthDate
          location {
            id
            name
          }
        }
      }
      nextToken
    }
  }
`;
