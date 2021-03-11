import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Sponsor {
  readonly id: string;
  readonly name: string;
  readonly logo?: string;
  readonly locations?: (string | null)[];
  readonly donee?: (Donee | null)[];
  constructor(init: ModelInit<Sponsor>);
  static copyOf(source: Sponsor, mutator: (draft: MutableModel<Sponsor>) => MutableModel<Sponsor> | void): Sponsor;
}

export declare class Donee {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly smallBiography: string;
  readonly fullBiography: string;
  readonly profilePhoto: string;
  readonly sponsor?: Sponsor;
  constructor(init: ModelInit<Donee>);
  static copyOf(source: Donee, mutator: (draft: MutableModel<Donee>) => MutableModel<Donee> | void): Donee;
}

export declare class Location {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<Location>);
  static copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly lastName: string;
  readonly email: string;
  readonly stripeID?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Donations {
  readonly id: string;
  readonly amount?: number;
  readonly gratificationPhoto?: string;
  constructor(init: ModelInit<Donations>);
  static copyOf(source: Donations, mutator: (draft: MutableModel<Donations>) => MutableModel<Donations> | void): Donations;
}