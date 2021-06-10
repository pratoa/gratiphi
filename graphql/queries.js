/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSponsor = /* GraphQL */ `
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
export const listSponsors = /* GraphQL */ `
  query ListSponsors(
    $filter: ModelSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDonee = /* GraphQL */ `
  query GetDonee($id: ID!) {
    getDonee(id: $id) {
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
export const listDonees = /* GraphQL */ `
  query ListDonees(
    $filter: ModelDoneeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      question
      createdAt
      updatedAt
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestionAnswer = /* GraphQL */ `
  query GetQuestionAnswer($id: ID!) {
    getQuestionAnswer(id: $id) {
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
export const listQuestionAnswers = /* GraphQL */ `
  query ListQuestionAnswers(
    $filter: ModelQuestionAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          locationId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDonations = /* GraphQL */ `
  query GetDonations($id: ID!) {
    getDonations(id: $id) {
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
export const listDonationss = /* GraphQL */ `
  query ListDonationss(
    $filter: ModelDonationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonationss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        user {
          id
          name
          lastName
          dateOfBirth
          email
          stripeId
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
          locationId
          createdAt
          updatedAt
        }
        amount
        isGratificationSent
        gratificationPhoto
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
