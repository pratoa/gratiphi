/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSponsor = /* GraphQL */ `
  subscription OnCreateSponsor {
    onCreateSponsor {
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
export const onUpdateSponsor = /* GraphQL */ `
  subscription OnUpdateSponsor {
    onUpdateSponsor {
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
export const onDeleteSponsor = /* GraphQL */ `
  subscription OnDeleteSponsor {
    onDeleteSponsor {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      name
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
      email
      stripeID
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
      email
      stripeID
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
      email
      stripeID
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
export const onUpdateDonee = /* GraphQL */ `
  subscription OnUpdateDonee {
    onUpdateDonee {
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
export const onDeleteDonee = /* GraphQL */ `
  subscription OnDeleteDonee {
    onDeleteDonee {
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
export const onCreateDonations = /* GraphQL */ `
  subscription OnCreateDonations {
    onCreateDonations {
      id
      amount
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
      amount
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
      amount
      gratificationPhoto
      createdAt
      updatedAt
    }
  }
`;
