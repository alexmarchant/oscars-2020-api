import { Model, DataTypes } from "sequelize";
import { sequelize } from "./init";

export class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  password?: string;
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "user"
  }
);