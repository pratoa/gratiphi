// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Sponsor, Donee, Location, User, Donations } = initSchema(schema);

export {
  Sponsor,
  Donee,
  Location,
  User,
  Donations
};