import { Options, Sequelize } from 'sequelize';
import {
  NODE_ENV,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_PORT,
} from './environment';
const PROJECT_NAME = 'apollo_boilerplate';

const configs = {
  development: {
    username: 'postgres',
    password: 'root',
    database: `${PROJECT_NAME}_development`,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'root',
    database: `${PROJECT_NAME}_test`,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: `${PROJECT_NAME}_production`,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: 'postgres',
  },
};

const config: Options = configs[NODE_ENV];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

export const development = configs.development;
export const test = configs.test;
export const production = configs.production;
