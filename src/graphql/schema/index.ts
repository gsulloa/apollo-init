import * as path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import { gql } from 'apollo-server';

const typesArray = fileLoader(path.join(__dirname), {
  extensions: ['.graphql'],
});
export default gql(mergeTypes(typesArray, { all: true }));
