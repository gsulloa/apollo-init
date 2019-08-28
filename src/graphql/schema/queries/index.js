const books = require("./books");

const queries = [books];

module.exports = `
  type Query {
    ${queries.join("")}
  }
`;
