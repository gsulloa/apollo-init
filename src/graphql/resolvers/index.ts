import * as fs from 'fs';
import * as path from 'path';

const basename = path.basename(__filename);
/*
 * Get all files in folder and give the content in an array
 */
const resolvers = fs
  .readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 &&
      file !== basename &&
      (file.slice(-4) === 's.js' || file.slice(-4) === 's.ts'),
  )
  .map(file => require(`./${file}`).default)
  .filter(e => e);
const exportResolvers = resolvers.reduce(
  (
    {
      Query: Queries,
      Mutation: Mutations,
      Subscription: Subscriptions,
      ...all
    },
    { Query, Mutation, Subscription, ...resolver },
  ) => ({
    Query: { ...Queries, ...Query },
    Mutation: { ...Mutations, ...Mutation },
    Subscription: { ...Subscriptions, ...Subscription },
    ...all,
    ...resolver,
  }),
  {},
);

export default exportResolvers;
