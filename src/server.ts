import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schema';
import { transformInternalErrors, buildContext } from './utils/apollo.helpers';

const server = new ApolloServer({
  schema: buildFederatedSchema({ typeDefs, resolvers }),
  context: buildContext,
  formatError: transformInternalErrors,
  cors: true,
  introspection: process.env.NODE_ENV !== 'production',
  playground: process.env.NODE_ENV !== 'production',
  debug: process.env.NODE_ENV !== 'production',
  tracing: process.env.NODE_ENV !== 'production',
});
export const listen = ({
  port = 3000,
  path = '/graphql',
} = {}): Promise<void> =>
  server.listen({ port, path }).then(({ url }): void => {
    console.log(`🚀 Server ready at ${url}`);
  });
