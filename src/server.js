const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const typeDefs = gql(require('./graphql/schema'));
const resolvers = require('./graphql/resolvers');
const db = require('./models');

/*
 * Get operation name of the current request
 * Usefull if want to check which resolvers must be authenticated
 *
 * There are two cases:
 * - Multiple definitions: use the operation name of the request to find the real resolver name
 * - Unique definition: use the unique given resolver name
 */
const getOperationNameFromDoc = ({ doc, req }) => {
  const { definitions } = doc;
  const operationName =
    definitions.length > 1
      ? definitions.find(element => element.name.value === req.body.operationName)
          .selectionSet.selections[0].name.value
      : definitions[0].selectionSet.selections[0].name.value;
  return operationName;
};

const server = new ApolloServer({
  schema: buildFederatedSchema({ typeDefs, resolvers }),
  context: ({ req }) => {
    if (req.method === 'get') return null;
    const doc = gql(req.body.query);
    const operationName = getOperationNameFromDoc({ doc, req });
    console.log({ operationName }); // eslint-disable-line no-console
    return { db };
  },
  formatError: err => {
    // TODO: handle internal server errors
    console.log(err); // eslint-disable-line no-console
    return err;
  },
  cors: true,
  introspection: process.env.NODE_ENV !== 'production',
  playground: process.env.NODE_ENV !== 'production',
  debug: process.env.NODE_ENV !== 'production',
  tracing: process.env.NODE_ENV !== 'production'
});

module.exports = {
  listen: ({ port = 3000, path = '/graphql' } = {}) =>
    server.listen({ port, path }).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`); // eslint-disable-line no-console
    })
};
