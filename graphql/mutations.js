/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaymentIntent = /* GraphQL */ `
  mutation CreatePaymentIntent(
    $email: String
    $userId: String
    $amount: Float
  ) {
    createPaymentIntent(email: $email, userId: $userId, amount: $amount)
  }
`;
export const createSponsor = /* GraphQL */ `
  mutation CreateSponsor(
    $input: CreateSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    createSponsor(input: $input, condition: $condition) {
      id
      name
      logo
      identifier
      locations {
        items {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      donees {
        items {
          id
          firstName
          lastName
          birthDate
          smallBiography
          fullBiography
          profilePhoto
          identifier
          gender
          sponsorId
          locationId
          groups
          createdAt
          updatedAt
        }
        nextToken
      }
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
      identifier
      locations {
        items {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      donees {
        items {
          id
          firstName
          lastName
          birthDate
          smallBiography
          fullBiography
          profilePhoto
          identifier
          gender
          sponsorId
          locationId
          groups
          createdAt
          updatedAt
        }
        nextToken
      }
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
      identifier
      locations {
        items {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      donees {
        items {
          id
          firstName
          lastName
          birthDate
          smallBiography
          fullBiography
          profilePhoto
          identifier
          gender
          sponsorId
          locationId
          groups
          createdAt
          updatedAt
        }
        nextToken
      }
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
      identifier
      sponsorId
      sponsor {
        id
        name
        logo
        identifier
        locations {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      donations {
        items {
          id
          userId
          doneeId
          amount
          stripeTransactionId
          locationId
          gratificationId
          createdAt
          updatedAt
        }
        nextToken
      }
      gratifications {
        items {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      donees {
        items {
          id
          firstName
          lastName
          birthDate
          smallBiography
          fullBiography
          profilePhoto
          identifier
          gender
          sponsorId
          locationId
          groups
          createdAt
          updatedAt
        }
        nextToken
      }
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
      identifier
      sponsorId
      sponsor {
        id
        name
        logo
        identifier
        locations {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      donations {
        items {
          id
          userId
          doneeId
          amount
          stripeTransactionId
          locationId
          gratificationId
          createdAt
          updatedAt
        }
        nextToken
      }
      gratifications {
        items {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      donees {
        items {
          id
          firstName
          lastName
          birthDate
          smallBiography
          fullBiography
          profilePhoto
          identifier
          gender
          sponsorId
          locationId
          groups
          createdAt
          updatedAt
        }
        nextToken
      }
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
      identifier
      sponsorId
      sponsor {
        id
        name
        logo
        identifier
        locations {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      donations {
        items {
          id
          userId
          doneeId
          amount
          stripeTransactionId
          locationId
          gratificationId
          createdAt
          updatedAt
        }
        nextToken
      }
      gratifications {
        items {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      donees {
        items {
          id
          firstName
          lastName
          birthDate
          smallBiography
          fullBiography
          profilePhoto
          identifier
          gender
          sponsorId
          locationId
          groups
          createdAt
          updatedAt
        }
        nextToken
      }
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
      dateOfBirth
      email
      stripeId
      donations {
        items {
          id
          userId
          doneeId
          amount
          stripeTransactionId
          locationId
          gratificationId
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      lastName
      dateOfBirth
      email
      stripeId
      donations {
        items {
          id
          userId
          doneeId
          amount
          stripeTransactionId
          locationId
          gratificationId
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      lastName
      dateOfBirth
      email
      stripeId
      donations {
        items {
          id
          userId
          doneeId
          amount
          stripeTransactionId
          locationId
          gratificationId
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
export const createDonee = /* GraphQL */ `
  mutation CreateDonee(
    $input: CreateDoneeInput!
    $condition: ModelDoneeConditionInput
  ) {
    createDonee(input: $input, condition: $condition) {
      id
      firstName
      lastName
      birthDate
      smallBiography
      fullBiography
      profilePhoto
      identifier
      gender
      sponsorId
      sponsor {
        id
        name
        logo
        identifier
        locations {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      locationId
      location {
        id
        name
        identifier
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      donations {
        items {
          id
          userId
          doneeId
          amount
          stripeTransactionId
          locationId
          gratificationId
          createdAt
          updatedAt
        }
        nextToken
      }
      questionAnswer {
        items {
          id
          answer
          questionId
          doneeId
          createdAt
          updatedAt
        }
        nextToken
      }
      gratifications {
        items {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
          createdAt
          updatedAt
        }
        nextToken
      }
      groups
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
      birthDate
      smallBiography
      fullBiography
      profilePhoto
      identifier
      gender
      sponsorId
      sponsor {
        id
        name
        logo
        identifier
        locations {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      locationId
      location {
        id
        name
        identifier
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      donations {
        items {
          id
          userId
          doneeId
          amount
          stripeTransactionId
          locationId
          gratificationId
          createdAt
          updatedAt
        }
        nextToken
      }
      questionAnswer {
        items {
          id
          answer
          questionId
          doneeId
          createdAt
          updatedAt
        }
        nextToken
      }
      gratifications {
        items {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
          createdAt
          updatedAt
        }
        nextToken
      }
      groups
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
      birthDate
      smallBiography
      fullBiography
      profilePhoto
      identifier
      gender
      sponsorId
      sponsor {
        id
        name
        logo
        identifier
        locations {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      locationId
      location {
        id
        name
        identifier
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      donations {
        items {
          id
          userId
          doneeId
          amount
          stripeTransactionId
          locationId
          gratificationId
          createdAt
          updatedAt
        }
        nextToken
      }
      questionAnswer {
        items {
          id
          answer
          questionId
          doneeId
          createdAt
          updatedAt
        }
        nextToken
      }
      gratifications {
        items {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
          createdAt
          updatedAt
        }
        nextToken
      }
      groups
      createdAt
      updatedAt
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      question
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      question
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      question
      createdAt
      updatedAt
    }
  }
`;
export const createQuestionAnswer = /* GraphQL */ `
  mutation CreateQuestionAnswer(
    $input: CreateQuestionAnswerInput!
    $condition: ModelQuestionAnswerConditionInput
  ) {
    createQuestionAnswer(input: $input, condition: $condition) {
      id
      answer
      questionId
      question {
        id
        question
        createdAt
        updatedAt
      }
      doneeId
      createdAt
      updatedAt
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        identifier
        gender
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        questionAnswer {
          nextToken
        }
        gratifications {
          nextToken
        }
        groups
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateQuestionAnswer = /* GraphQL */ `
  mutation UpdateQuestionAnswer(
    $input: UpdateQuestionAnswerInput!
    $condition: ModelQuestionAnswerConditionInput
  ) {
    updateQuestionAnswer(input: $input, condition: $condition) {
      id
      answer
      questionId
      question {
        id
        question
        createdAt
        updatedAt
      }
      doneeId
      createdAt
      updatedAt
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        identifier
        gender
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        questionAnswer {
          nextToken
        }
        gratifications {
          nextToken
        }
        groups
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteQuestionAnswer = /* GraphQL */ `
  mutation DeleteQuestionAnswer(
    $input: DeleteQuestionAnswerInput!
    $condition: ModelQuestionAnswerConditionInput
  ) {
    deleteQuestionAnswer(input: $input, condition: $condition) {
      id
      answer
      questionId
      question {
        id
        question
        createdAt
        updatedAt
      }
      doneeId
      createdAt
      updatedAt
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        identifier
        gender
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        questionAnswer {
          nextToken
        }
        gratifications {
          nextToken
        }
        groups
        createdAt
        updatedAt
      }
    }
  }
`;
export const createDonation = /* GraphQL */ `
  mutation CreateDonation(
    $input: CreateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    createDonation(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        name
        lastName
        dateOfBirth
        email
        stripeId
        donations {
          nextToken
        }
        createdAt
        updatedAt
      }
      doneeId
      amount
      stripeTransactionId
      locationId
      location {
        id
        name
        identifier
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      gratificationId
      gratification {
        id
        gratificationUrl
        donationId
        donations {
          nextToken
        }
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        doneeId
        createdAt
        updatedAt
        donee {
          id
          firstName
          lastName
          birthDate
          smallBiography
          fullBiography
          profilePhoto
          identifier
          gender
          sponsorId
          locationId
          groups
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        identifier
        gender
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        questionAnswer {
          nextToken
        }
        gratifications {
          nextToken
        }
        groups
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateDonation = /* GraphQL */ `
  mutation UpdateDonation(
    $input: UpdateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    updateDonation(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        name
        lastName
        dateOfBirth
        email
        stripeId
        donations {
          nextToken
        }
        createdAt
        updatedAt
      }
      doneeId
      amount
      stripeTransactionId
      locationId
      location {
        id
        name
        identifier
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      gratificationId
      gratification {
        id
        gratificationUrl
        donationId
        donations {
          nextToken
        }
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        doneeId
        createdAt
        updatedAt
        donee {
          id
          firstName
          lastName
          birthDate
          smallBiography
          fullBiography
          profilePhoto
          identifier
          gender
          sponsorId
          locationId
          groups
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        identifier
        gender
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        questionAnswer {
          nextToken
        }
        gratifications {
          nextToken
        }
        groups
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteDonation = /* GraphQL */ `
  mutation DeleteDonation(
    $input: DeleteDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    deleteDonation(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        name
        lastName
        dateOfBirth
        email
        stripeId
        donations {
          nextToken
        }
        createdAt
        updatedAt
      }
      doneeId
      amount
      stripeTransactionId
      locationId
      location {
        id
        name
        identifier
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      gratificationId
      gratification {
        id
        gratificationUrl
        donationId
        donations {
          nextToken
        }
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        doneeId
        createdAt
        updatedAt
        donee {
          id
          firstName
          lastName
          birthDate
          smallBiography
          fullBiography
          profilePhoto
          identifier
          gender
          sponsorId
          locationId
          groups
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        identifier
        gender
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        questionAnswer {
          nextToken
        }
        gratifications {
          nextToken
        }
        groups
        createdAt
        updatedAt
      }
    }
  }
`;
export const createGratification = /* GraphQL */ `
  mutation CreateGratification(
    $input: CreateGratificationInput!
    $condition: ModelGratificationConditionInput
  ) {
    createGratification(input: $input, condition: $condition) {
      id
      gratificationUrl
      donationId
      donations {
        items {
          id
          userId
          doneeId
          amount
          stripeTransactionId
          locationId
          gratificationId
          createdAt
          updatedAt
        }
        nextToken
      }
      locationId
      location {
        id
        name
        identifier
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      doneeId
      createdAt
      updatedAt
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        identifier
        gender
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        questionAnswer {
          nextToken
        }
        gratifications {
          nextToken
        }
        groups
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateGratification = /* GraphQL */ `
  mutation UpdateGratification(
    $input: UpdateGratificationInput!
    $condition: ModelGratificationConditionInput
  ) {
    updateGratification(input: $input, condition: $condition) {
      id
      gratificationUrl
      donationId
      donations {
        items {
          id
          userId
          doneeId
          amount
          stripeTransactionId
          locationId
          gratificationId
          createdAt
          updatedAt
        }
        nextToken
      }
      locationId
      location {
        id
        name
        identifier
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      doneeId
      createdAt
      updatedAt
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        identifier
        gender
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        questionAnswer {
          nextToken
        }
        gratifications {
          nextToken
        }
        groups
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteGratification = /* GraphQL */ `
  mutation DeleteGratification(
    $input: DeleteGratificationInput!
    $condition: ModelGratificationConditionInput
  ) {
    deleteGratification(input: $input, condition: $condition) {
      id
      gratificationUrl
      donationId
      donations {
        items {
          id
          userId
          doneeId
          amount
          stripeTransactionId
          locationId
          gratificationId
          createdAt
          updatedAt
        }
        nextToken
      }
      locationId
      location {
        id
        name
        identifier
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
        createdAt
        updatedAt
        donees {
          nextToken
        }
      }
      doneeId
      createdAt
      updatedAt
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        identifier
        gender
        sponsorId
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        donations {
          nextToken
        }
        questionAnswer {
          nextToken
        }
        gratifications {
          nextToken
        }
        groups
        createdAt
        updatedAt
      }
    }
  }
`;
