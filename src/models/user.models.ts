import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
/*
import {
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
} from 'sequelize';
*/

export default class User extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public preferredName!: string | null; // for nullable fields

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.

  /*
  public getProjects!: HasManyGetAssociationsMixin<Project>; // Note the null assertions!
  public addProject!: HasManyAddAssociationMixin<Project, number>;
  public hasProject!: HasManyHasAssociationMixin<Project, number>;
  public countProjects!: HasManyCountAssociationsMixin;
  public createProject!: HasManyCreateAssociationMixin<Project>;
  */

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  // public readonly projects?: Project[];
  // Note this is optional since it's only populated when explicitly requested in code

  public static associations: {
    //    projects: Association<User, Project>;
  };
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    preferredName: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: 'users',
    sequelize,
  },
);
