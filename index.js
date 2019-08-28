const server = require("./src/server");
const db = require("./src/models");

db.sequelize.authenticate().then(() => {
  console.log(`Connection to database successfully`);
  server.listen();
});
