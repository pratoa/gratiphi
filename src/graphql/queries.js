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

export const listDonations = /* GraphQL */ `
  query ListDonations(
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        createdAt
        donee {
          firstName
          lastName
          birthDate
          profilePhoto
        }
        location {
          id
          name
        }
        gratificationId
        gratification {
          id
          gratificationUrl
        }
      }
      nextToken
    }
  }
`;
