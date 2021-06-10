/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSponsor = /* GraphQL */ `
  subscription OnCreateSponsor {
    onCreateSponsor {
      id
      name
      logo
      locations {
        items {
          id
          name
          sponsorId
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
          sponsorId
          locationId
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
export const onUpdateSponsor = /* GraphQL */ `
  subscription OnUpdateSponsor {
    onUpdateSponsor {
      id
      name
      logo
      locations {
        items {
          id
          name
          sponsorId
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
          sponsorId
          locationId
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
export const onDeleteSponsor = /* GraphQL */ `
  subscription OnDeleteSponsor {
    onDeleteSponsor {
      id
      name
      logo
      locations {
        items {
          id
          name
          sponsorId
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
          sponsorId
          locationId
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      name
      sponsorId
      sponsor {
        id
        name
        logo
        locations {
          nextToken
        }
        donees {
          nextToken
        }
        createdAt
        updatedAt
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
          sponsorId
          locationId
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      name
      sponsorId
      sponsor {
        id
        name
        logo
        locations {
          nextToken
        }
        donees {
          nextToken
        }
        createdAt
        updatedAt
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
          sponsorId
          locationId
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      name
      sponsorId
      sponsor {
        id
        name
        logo
        locations {
          nextToken
        }
        donees {
          nextToken
        }
        createdAt
        updatedAt
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
          sponsorId
          locationId
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
          isGratificationSent
          gratificationPhoto
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
          isGratificationSent
          gratificationPhoto
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
          isGratificationSent
          gratificationPhoto
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
      sponsorId
      sponsor {
        id
        name
        logo
        locations {
          nextToken
        }
        donees {
          nextToken
        }
        createdAt
        updatedAt
      }
      locationId
      location {
        id
        name
        sponsorId
        sponsor {
          id
          name
          logo
          createdAt
          updatedAt
        }
        donees {
          nextToken
        }
        createdAt
        updatedAt
      }
      donations {
        items {
          id
          userId
          doneeId
          amount
          isGratificationSent
          gratificationPhoto
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
      sponsorId
      sponsor {
        id
        name
        logo
        locations {
          nextToken
        }
        donees {
          nextToken
        }
        createdAt
        updatedAt
      }
      locationId
      location {
        id
        name
        sponsorId
        sponsor {
          id
          name
          logo
          createdAt
          updatedAt
        }
        donees {
          nextToken
        }
        createdAt
        updatedAt
      }
      donations {
        items {
          id
          userId
          doneeId
          amount
          isGratificationSent
          gratificationPhoto
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
      sponsorId
      sponsor {
        id
        name
        logo
        locations {
          nextToken
        }
        donees {
          nextToken
        }
        createdAt
        updatedAt
      }
      locationId
      location {
        id
        name
        sponsorId
        sponsor {
          id
          name
          logo
          createdAt
          updatedAt
        }
        donees {
          nextToken
        }
        createdAt
        updatedAt
      }
      donations {
        items {
          id
          userId
          doneeId
          amount
          isGratificationSent
          gratificationPhoto
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
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        sponsorId
        sponsor {
          id
          name
          logo
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        sponsorId
        sponsor {
          id
          name
          logo
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        sponsorId
        sponsor {
          id
          name
          logo
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDonations = /* GraphQL */ `
  subscription OnCreateDonations {
    onCreateDonations {
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
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        sponsorId
        sponsor {
          id
          name
          logo
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
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
        createdAt
        updatedAt
      }
      amount
      isGratificationSent
      gratificationPhoto
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDonations = /* GraphQL */ `
  subscription OnUpdateDonations {
    onUpdateDonations {
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
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        sponsorId
        sponsor {
          id
          name
          logo
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
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
        createdAt
        updatedAt
      }
      amount
      isGratificationSent
      gratificationPhoto
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDonations = /* GraphQL */ `
  subscription OnDeleteDonations {
    onDeleteDonations {
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
      donee {
        id
        firstName
        lastName
        birthDate
        smallBiography
        fullBiography
        profilePhoto
        sponsorId
        sponsor {
          id
          name
          logo
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
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
        createdAt
        updatedAt
      }
      amount
      isGratificationSent
      gratificationPhoto
      createdAt
      updatedAt
    }
  }
`;
