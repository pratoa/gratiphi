/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSponsor = /* GraphQL */ `
  mutation CreateSponsor(
    $input: CreateSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    createSponsor(input: $input, condition: $condition) {
      id
      name
      logo
      donee {
        items {
          id
          firstName
          lastName
          location
          smallBiography
          fullBiography
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
export const updateSponsor = /* GraphQL */ `
  mutation UpdateSponsor(
    $input: UpdateSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    updateSponsor(input: $input, condition: $condition) {
      id
      name
      logo
      donee {
        items {
          id
          firstName
          lastName
          location
          smallBiography
          fullBiography
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
export const deleteSponsor = /* GraphQL */ `
  mutation DeleteSponsor(
    $input: DeleteSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    deleteSponsor(input: $input, condition: $condition) {
      id
      name
      logo
      donee {
        items {
          id
          firstName
          lastName
          location
          smallBiography
          fullBiography
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      lastName
      email
      sponsorID
      sponsor {
        id
        name
        logo
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      lastName
      email
      sponsorID
      sponsor {
        id
        name
        logo
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      lastName
      email
      sponsorID
      sponsor {
        id
        name
        logo
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
export const createDonee = /* GraphQL */ `
  mutation CreateDonee(
    $input: CreateDoneeInput!
    $condition: ModelDoneeConditionInput
  ) {
    createDonee(input: $input, condition: $condition) {
      id
      firstName
      lastName
      location
      smallBiography
      fullBiography
      sponsorID
      sponsor {
        id
        name
        logo
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
export const updateDonee = /* GraphQL */ `
  mutation UpdateDonee(
    $input: UpdateDoneeInput!
    $condition: ModelDoneeConditionInput
  ) {
    updateDonee(input: $input, condition: $condition) {
      id
      firstName
      lastName
      location
      smallBiography
      fullBiography
      sponsorID
      sponsor {
        id
        name
        logo
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
export const deleteDonee = /* GraphQL */ `
  mutation DeleteDonee(
    $input: DeleteDoneeInput!
    $condition: ModelDoneeConditionInput
  ) {
    deleteDonee(input: $input, condition: $condition) {
      id
      firstName
      lastName
      location
      smallBiography
      fullBiography
      sponsorID
      sponsor {
        id
        name
        logo
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
export const createDonations = /* GraphQL */ `
  mutation CreateDonations(
    $input: CreateDonationsInput!
    $condition: ModelDonationsConditionInput
  ) {
    createDonations(input: $input, condition: $condition) {
      id
      amount
      createdAt
      updatedAt
    }
  }
`;
export const updateDonations = /* GraphQL */ `
  mutation UpdateDonations(
    $input: UpdateDonationsInput!
    $condition: ModelDonationsConditionInput
  ) {
    updateDonations(input: $input, condition: $condition) {
      id
      amount
      createdAt
      updatedAt
    }
  }
`;
export const deleteDonations = /* GraphQL */ `
  mutation DeleteDonations(
    $input: DeleteDonationsInput!
    $condition: ModelDonationsConditionInput
  ) {
    deleteDonations(input: $input, condition: $condition) {
      id
      amount
      createdAt
      updatedAt
    }
  }
`;
