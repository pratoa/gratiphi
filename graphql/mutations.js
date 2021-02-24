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
export const updateSponsor = /* GraphQL */ `
  mutation UpdateSponsor(
    $input: UpdateSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    updateSponsor(input: $input, condition: $condition) {
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
export const deleteSponsor = /* GraphQL */ `
  mutation DeleteSponsor(
    $input: DeleteSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    deleteSponsor(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      name
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
      stripeID
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
      stripeID
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
      stripeID
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
export const updateDonee = /* GraphQL */ `
  mutation UpdateDonee(
    $input: UpdateDoneeInput!
    $condition: ModelDoneeConditionInput
  ) {
    updateDonee(input: $input, condition: $condition) {
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
export const deleteDonee = /* GraphQL */ `
  mutation DeleteDonee(
    $input: DeleteDoneeInput!
    $condition: ModelDoneeConditionInput
  ) {
    deleteDonee(input: $input, condition: $condition) {
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
export const createDonations = /* GraphQL */ `
  mutation CreateDonations(
    $input: CreateDonationsInput!
    $condition: ModelDonationsConditionInput
  ) {
    createDonations(input: $input, condition: $condition) {
      id
      amount
      gratificationPhoto
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
      gratificationPhoto
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
      gratificationPhoto
      createdAt
      updatedAt
    }
  }
`;
