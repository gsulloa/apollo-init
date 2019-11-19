const path = require("path");
const mergeGraphqlSchemas = require("merge-graphql-schemas");

const { fileLoader } = mergeGraphqlSchemas;
const { mergeTypes } = mergeGraphqlSchemas;

const typesArray = fileLoader(path.join(__dirname, "schema/*.graphql"));

module.exports = mergeTypes(typesArray, { all: true });
