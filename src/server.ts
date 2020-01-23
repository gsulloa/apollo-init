import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schema';
import { transformInternalErrors, buildContext } from './utils/apollo.helpers';
import { IS_PRODUCTION } from './config/environment';

const server = new ApolloServer({
  schema: buildFederatedSchema({ typeDefs, resolvers }),
  context: buildContext,
  formatError: transformInternalErrors,
  cors: true,
  introspection: IS_PRODUCTION,
  playground: IS_PRODUCTION,
  debug: IS_PRODUCTION,
  tracing: IS_PRODUCTION,
});
export const listen = ({
  port = 3000,
  path = '/graphql',
} = {}): Promise<void> =>
  server.listen({ port, path }).then(({ url }): void => {
    console.log(`🚀 Server ready at ${url}`);
  });
