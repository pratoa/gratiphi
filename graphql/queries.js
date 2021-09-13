/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSponsor = /* GraphQL */ `
  query GetSponsor($id: ID!) {
    getSponsor(id: $id) {
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
        identifier
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
          identifier
          gender
          sponsorId
          locationId
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
        donees {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
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
        donees {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
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
          identifier
          gender
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
export const getDonation = /* GraphQL */ `
  query GetDonation($id: ID!) {
    getDonation(id: $id) {
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
        createdAt
        updatedAt
      }
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
        donees {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
          identifier
          gender
          sponsorId
          locationId
          createdAt
          updatedAt
        }
        amount
        stripeTransactionId
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        gratificationId
        gratification {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
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
export const getGratification = /* GraphQL */ `
  query GetGratification($id: ID!) {
    getGratification(id: $id) {
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
        donees {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGratifications = /* GraphQL */ `
  query ListGratifications(
    $filter: ModelGratificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGratifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
export const locationBySponsorId = /* GraphQL */ `
  query LocationBySponsorId(
    $sponsorId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    locationBySponsorId(
      sponsorId: $sponsorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        donees {
          nextToken
        }
        donations {
          nextToken
        }
        gratifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const doneeBySponsorId = /* GraphQL */ `
  query DoneeBySponsorId(
    $sponsorId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelDoneeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    doneeBySponsorId(
      sponsorId: $sponsorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const doneeByLocationId = /* GraphQL */ `
  query DoneeByLocationId(
    $locationId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelDoneeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    doneeByLocationId(
      locationId: $locationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const questionAnswerByQuestionId = /* GraphQL */ `
  query QuestionAnswerByQuestionId(
    $questionId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionAnswerByQuestionId(
      questionId: $questionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          identifier
          gender
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
export const questionAnswerByDoneeId = /* GraphQL */ `
  query QuestionAnswerByDoneeId(
    $doneeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionAnswerByDoneeId(
      doneeId: $doneeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          identifier
          gender
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
export const donationByUserId = /* GraphQL */ `
  query DonationByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    donationByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          identifier
          gender
          sponsorId
          locationId
          createdAt
          updatedAt
        }
        amount
        stripeTransactionId
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        gratificationId
        gratification {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
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
export const donationByDoneeId = /* GraphQL */ `
  query DonationByDoneeId(
    $doneeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    donationByDoneeId(
      doneeId: $doneeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          identifier
          gender
          sponsorId
          locationId
          createdAt
          updatedAt
        }
        amount
        stripeTransactionId
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        gratificationId
        gratification {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
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
export const donationByLocationId = /* GraphQL */ `
  query DonationByLocationId(
    $locationId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    donationByLocationId(
      locationId: $locationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          identifier
          gender
          sponsorId
          locationId
          createdAt
          updatedAt
        }
        amount
        stripeTransactionId
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        gratificationId
        gratification {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
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
export const donationByGratificationId = /* GraphQL */ `
  query DonationByGratificationId(
    $gratificationId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    donationByGratificationId(
      gratificationId: $gratificationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          identifier
          gender
          sponsorId
          locationId
          createdAt
          updatedAt
        }
        amount
        stripeTransactionId
        locationId
        location {
          id
          name
          identifier
          sponsorId
          createdAt
          updatedAt
        }
        gratificationId
        gratification {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
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
export const gratificationByLocation = /* GraphQL */ `
  query GratificationByLocation(
    $locationId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelGratificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gratificationByLocation(
      locationId: $locationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
export const gratificationByDonee = /* GraphQL */ `
  query GratificationByDonee(
    $doneeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelGratificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gratificationByDonee(
      doneeId: $doneeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
