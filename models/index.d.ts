import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Sponsor {
  readonly id: string;
  readonly name: string;
  readonly logo?: string;
  readonly locations?: (Location | null)[];
  readonly donees?: (Donee | null)[];
  constructor(init: ModelInit<Sponsor>);
  static copyOf(source: Sponsor, mutator: (draft: MutableModel<Sponsor>) => MutableModel<Sponsor> | void): Sponsor;
}

export declare class Location {
  readonly id: string;
  readonly name: string;
  readonly sponsor?: Sponsor;
  readonly donees?: (Donee | null)[];
  constructor(init: ModelInit<Location>);
  static copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

export declare class Donee {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly birthDate: string;
  readonly smallBiography: string;
  readonly fullBiography: string;
  readonly profilePhoto: string;
  readonly sponsor?: Sponsor;
  readonly location?: Location;
  readonly donations?: (Donations | null)[];
  constructor(init: ModelInit<Donee>);
  static copyOf(source: Donee, mutator: (draft: MutableModel<Donee>) => MutableModel<Donee> | void): Donee;
}

export declare class Donations {
  readonly id: string;
  readonly user?: User;
  readonly donee?: Donee;
  readonly amount?: number;
  readonly isGratificationSent?: boolean;
  readonly gratificationPhoto?: string;
  constructor(init: ModelInit<Donations>);
  static copyOf(source: Donations, mutator: (draft: MutableModel<Donations>) => MutableModel<Donations> | void): Donations;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly lastName: string;
  readonly email: string;
  readonly stripeId?: string;
  readonly donations?: (Donations | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}