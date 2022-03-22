/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const retrieveDonee = /* GraphQL */ `
  query RetrieveDonee($doneeId: String) {
    retrieveDonee(doneeId: $doneeId)
  }
`;
export const getSponsor = /* GraphQL */ `
  query GetSponsor($id: ID!) {
    getSponsor(id: $id) {
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
        createdAt
        updatedAt
        locations {
          nextToken
        }
        donees {
          nextToken
        }
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
        createdAt
        updatedAt
        donations {
          nextToken
        }
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
      interest {
        items {
          id
          interest
          doneeId
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
        interest {
          nextToken
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
        interest {
          nextToken
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
        interest {
          nextToken
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
      nextToken
    }
  }
`;
export const getInterest = /* GraphQL */ `
  query GetInterest($id: ID!) {
    getInterest(id: $id) {
      id
      interest
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
        interest {
          nextToken
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
    }
  }
`;
export const listInterests = /* GraphQL */ `
  query ListInterests(
    $filter: ModelInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInterests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        interest
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
      nextToken
    }
  }
`;
export const interestByDoneeId = /* GraphQL */ `
  query InterestByDoneeId(
    $doneeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    interestByDoneeId(
      doneeId: $doneeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        interest
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
        interest {
          nextToken
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
        question {
          id
          question
          createdAt
          updatedAt
        }
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
        question {
          id
          question
          createdAt
          updatedAt
        }
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
        question {
          id
          question
          createdAt
          updatedAt
        }
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
        interest {
          nextToken
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
        gratification {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
          createdAt
          updatedAt
        }
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
        gratification {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
          createdAt
          updatedAt
        }
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
        gratification {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
          createdAt
          updatedAt
        }
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
        gratification {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
          createdAt
          updatedAt
        }
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
        gratification {
          id
          gratificationUrl
          donationId
          locationId
          doneeId
          createdAt
          updatedAt
        }
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
        interest {
          nextToken
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
      nextToken
    }
  }
`;
export const gratificationByDoneeByDate = /* GraphQL */ `
  query GratificationByDoneeByDate(
    $doneeId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGratificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gratificationByDoneeByDate(
      doneeId: $doneeId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const gratificationByUrl = /* GraphQL */ `
  query GratificationByUrl(
    $gratificationUrl: String
    $sortDirection: ModelSortDirection
    $filter: ModelGratificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gratificationByUrl(
      gratificationUrl: $gratificationUrl
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
