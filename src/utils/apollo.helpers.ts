import { gql } from 'apollo-server';
import { OperationDefinitionNode, FieldNode, GraphQLError } from 'graphql';
import { Context } from '../models/context.interface';
import { User } from '../models';
/*
 * Get operation name of the current request
 * Usefull if want to check which resolvers must be authenticated
 *
 * There are two cases:
 * - Multiple definitions: use the operation name of the request to find the real resolver name
 * - Unique definition: use the unique given resolver name
 */
export const getOperationNames = ({ req }): string[] => {
  const doc = gql(req.body.query);
  const { definitions } = doc;
  const operationNames: string[] =
    definitions.length > 1
      ? (definitions as OperationDefinitionNode[])
        .find(element => element.name.value === req.body.operationName)
        .selectionSet.selections.map(
          (selection: FieldNode) => selection.name.value,
        )
      : (definitions as OperationDefinitionNode[])[0].selectionSet.selections.map(
        (selection: FieldNode) => selection.name.value,
      );
  return operationNames;
};

export const transformInternalErrors = (error: GraphQLError): GraphQLError => {
  // TODO: handle internal server errors
  console.log(error); // eslint-disable-line no-console
  return error;
};

export const buildContext = ({ req }): Context => {
  if (req.method === 'get') return null;
  const operationNames = getOperationNames({ req });
  console.log({ operationNames }); // eslint-disable-line no-console
  return { getUser: (): User => new User() };
};
