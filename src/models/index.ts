import { Sequelize } from 'sequelize';
import { sequelize } from '../config/database';

export const db = {
  sequelize,
  Sequelize,
};
