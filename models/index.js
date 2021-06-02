// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Sponsor, Location, Donee, Donations, User } = initSchema(schema);

export {
  Sponsor,
  Location,
  Donee,
  Donations,
  User
};