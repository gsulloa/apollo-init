import * as server from './server';
import * as db from './models';

db.sequelize.authenticate().then(() => {
  console.log(`Connection to database successfully`);
  server.listen();
});
