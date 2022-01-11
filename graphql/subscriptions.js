/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSponsor = /* GraphQL */ `
  subscription OnCreateSponsor {
    onCreateSponsor {
      id
      name
      logo
      identifier
      createdAt
      updatedAt
      locations {
        items {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
        nextToken
      }
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
      createdAt
      updatedAt
      locations {
        items {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
        nextToken
      }
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
      createdAt
      updatedAt
      locations {
        items {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
        nextToken
      }
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
      country
      sponsorId
      groups
      createdAt
      updatedAt
      sponsor {
        id
        name
        logo
        identifier
        createdAt
        updatedAt
        locations {
          nextToken
        }
        donees {
          nextToken
        }
      }
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
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      name
      identifier
      country
      sponsorId
      groups
      createdAt
      updatedAt
      sponsor {
        id
        name
        logo
        identifier
        createdAt
        updatedAt
        locations {
          nextToken
        }
        donees {
          nextToken
        }
      }
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
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      name
      identifier
      country
      sponsorId
      groups
      createdAt
      updatedAt
      sponsor {
        id
        name
        logo
        identifier
        createdAt
        updatedAt
        locations {
          nextToken
        }
        donees {
          nextToken
        }
      }
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      locationId
      groups
      createdAt
      updatedAt
      sponsor {
        id
        name
        logo
        identifier
        createdAt
        updatedAt
        locations {
          nextToken
        }
        donees {
          nextToken
        }
      }
      location {
        id
        name
        identifier
        country
        sponsorId
        groups
        createdAt
        updatedAt
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donees {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
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
      locationId
      groups
      createdAt
      updatedAt
      sponsor {
        id
        name
        logo
        identifier
        createdAt
        updatedAt
        locations {
          nextToken
        }
        donees {
          nextToken
        }
      }
      location {
        id
        name
        identifier
        country
        sponsorId
        groups
        createdAt
        updatedAt
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donees {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
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
      locationId
      groups
      createdAt
      updatedAt
      sponsor {
        id
        name
        logo
        identifier
        createdAt
        updatedAt
        locations {
          nextToken
        }
        donees {
          nextToken
        }
      }
      location {
        id
        name
        identifier
        country
        sponsorId
        groups
        createdAt
        updatedAt
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donees {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
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
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        location {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
        questionAnswer {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
      }
      question {
        id
        question
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
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        location {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
        questionAnswer {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
      }
      question {
        id
        question
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
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        location {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
        questionAnswer {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
      }
      question {
        id
        question
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
      doneeId
      amount
      stripeTransactionId
      locationId
      gratificationId
      createdAt
      updatedAt
      location {
        id
        name
        identifier
        country
        sponsorId
        groups
        createdAt
        updatedAt
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donees {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
      }
      user {
        id
        name
        lastName
        dateOfBirth
        email
        stripeId
        createdAt
        updatedAt
        donations {
          nextToken
        }
      }
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
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        location {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
        questionAnswer {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
      }
      gratification {
        id
        gratificationUrl
        donationId
        locationId
        doneeId
        createdAt
        updatedAt
        location {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
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
        donations {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation {
    onUpdateDonation {
      id
      userId
      doneeId
      amount
      stripeTransactionId
      locationId
      gratificationId
      createdAt
      updatedAt
      location {
        id
        name
        identifier
        country
        sponsorId
        groups
        createdAt
        updatedAt
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donees {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
      }
      user {
        id
        name
        lastName
        dateOfBirth
        email
        stripeId
        createdAt
        updatedAt
        donations {
          nextToken
        }
      }
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
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        location {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
        questionAnswer {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
      }
      gratification {
        id
        gratificationUrl
        donationId
        locationId
        doneeId
        createdAt
        updatedAt
        location {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
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
        donations {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation {
    onDeleteDonation {
      id
      userId
      doneeId
      amount
      stripeTransactionId
      locationId
      gratificationId
      createdAt
      updatedAt
      location {
        id
        name
        identifier
        country
        sponsorId
        groups
        createdAt
        updatedAt
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donees {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
      }
      user {
        id
        name
        lastName
        dateOfBirth
        email
        stripeId
        createdAt
        updatedAt
        donations {
          nextToken
        }
      }
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
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        location {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
        questionAnswer {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
      }
      gratification {
        id
        gratificationUrl
        donationId
        locationId
        doneeId
        createdAt
        updatedAt
        location {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
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
        donations {
          nextToken
        }
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
      locationId
      doneeId
      createdAt
      updatedAt
      location {
        id
        name
        identifier
        country
        sponsorId
        groups
        createdAt
        updatedAt
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donees {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
      }
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
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        location {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
        questionAnswer {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
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
    }
  }
`;
export const onUpdateGratification = /* GraphQL */ `
  subscription OnUpdateGratification {
    onUpdateGratification {
      id
      gratificationUrl
      donationId
      locationId
      doneeId
      createdAt
      updatedAt
      location {
        id
        name
        identifier
        country
        sponsorId
        groups
        createdAt
        updatedAt
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donees {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
      }
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
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        location {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
        questionAnswer {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
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
    }
  }
`;
export const onDeleteGratification = /* GraphQL */ `
  subscription OnDeleteGratification {
    onDeleteGratification {
      id
      gratificationUrl
      donationId
      locationId
      doneeId
      createdAt
      updatedAt
      location {
        id
        name
        identifier
        country
        sponsorId
        groups
        createdAt
        updatedAt
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        donees {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
      }
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
        sponsor {
          id
          name
          logo
          identifier
          createdAt
          updatedAt
        }
        location {
          id
          name
          identifier
          country
          sponsorId
          groups
          createdAt
          updatedAt
        }
        questionAnswer {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
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
    }
  }
`;
