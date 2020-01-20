import * as server from './server';
import { sequelize } from './config/database';

sequelize.authenticate().then(() => {
  console.log(`Connection to database successfully`);
  server.listen();
});
