import { Model, DataTypes } from "sequelize";
import { sequelize } from "./init";

export class Todo extends Model {
  id!: number;
  title!: string;
  done!: boolean;
  userId!: number;
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "todo"
  }
);
