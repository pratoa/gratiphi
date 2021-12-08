/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSponsor = /* GraphQL */ `
  subscription OnCreateSponsor {
    onCreateSponsor {
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
export const onUpdateSponsor = /* GraphQL */ `
  subscription OnUpdateSponsor {
    onUpdateSponsor {
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
export const onDeleteSponsor = /* GraphQL */ `
  subscription OnDeleteSponsor {
    onDeleteSponsor {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      question
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      question
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      question
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuestionAnswer = /* GraphQL */ `
  subscription OnCreateQuestionAnswer {
    onCreateQuestionAnswer {
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
export const onUpdateQuestionAnswer = /* GraphQL */ `
  subscription OnUpdateQuestionAnswer {
    onUpdateQuestionAnswer {
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
export const onDeleteQuestionAnswer = /* GraphQL */ `
  subscription OnDeleteQuestionAnswer {
    onDeleteQuestionAnswer {
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
export const onCreateDonation = /* GraphQL */ `
  subscription OnCreateDonation {
    onCreateDonation {
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
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation {
    onUpdateDonation {
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
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation {
    onDeleteDonation {
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
export const onCreateGratification = /* GraphQL */ `
  subscription OnCreateGratification {
    onCreateGratification {
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
export const onUpdateGratification = /* GraphQL */ `
  subscription OnUpdateGratification {
    onUpdateGratification {
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
export const onDeleteGratification = /* GraphQL */ `
  subscription OnDeleteGratification {
    onDeleteGratification {
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
export const onCreateDonee = /* GraphQL */ `
  subscription OnCreateDonee {
    onCreateDonee {
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
export const onUpdateDonee = /* GraphQL */ `
  subscription OnUpdateDonee {
    onUpdateDonee {
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
export const onDeleteDonee = /* GraphQL */ `
  subscription OnDeleteDonee {
    onDeleteDonee {
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
