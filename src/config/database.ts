import { Options, Sequelize } from 'sequelize';
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
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: `${PROJECT_NAME}_production`,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    dialect: 'postgres',
  },
};

const env = process.env.NODE_ENV || 'development';
const config: Options = configs[env];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);
