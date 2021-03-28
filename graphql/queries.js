/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncSponsors = /* GraphQL */ `
  query SyncSponsors(
    $filter: ModelSponsorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSponsors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        logo
        locations {
          nextToken
          startedAt
        }
        donees {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        donees {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        sponsorId
        sponsor {
          id
          name
          logo
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        donees {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
          startedAt
        }
        donees {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        donees {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        lastName
        email
        stripeId
        donations {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      lastName
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        email
        stripeId
        donations {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDonees = /* GraphQL */ `
  query SyncDonees(
    $filter: ModelDoneeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDonees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
          sponsorId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        donations {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
          startedAt
        }
        donees {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        donees {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
          sponsorId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        donations {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDonations = /* GraphQL */ `
  query SyncDonations(
    $filter: ModelDonationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDonations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        user {
          id
          name
          lastName
          email
          stripeId
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        amount
        isGratificationSent
        gratificationPhoto
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        email
        stripeId
        donations {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
          sponsorId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        donations {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      amount
      isGratificationSent
      gratificationPhoto
      _version
      _deleted
      _lastChangedAt
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
          email
          stripeId
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        amount
        isGratificationSent
        gratificationPhoto
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
