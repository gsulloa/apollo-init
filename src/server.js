const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql(require("./graphql/schema"));
const resolvers = require("./graphql/resolvers");
const db = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    console.log("request from ip" + req.ip);
    return { db };
  }
});

module.exports = {
  listen: ({ port = 3000, path = "/graphql" } = {}) =>
    server.listen({ port, path }).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    })
};
