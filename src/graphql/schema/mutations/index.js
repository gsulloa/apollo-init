const books = require("./books");
const mutations = [books];
module.exports = `
  type Mutation {
    ${mutations.join("")}
  }
`;
