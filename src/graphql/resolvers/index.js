const books = require('./books');

const resolvers = [books];

module.exports = resolvers.reduce(
  (
    { Query: Queries, Mutation: Mutations, ...all },
    { Query, Mutation, ...resolver }
  ) => ({
    Query: { ...Queries, ...Query },
    Mutation: { ...Mutations, ...Mutation },
    ...all,
    ...resolver
  })
);
