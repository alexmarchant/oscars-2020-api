import { Model, DataTypes } from "sequelize"
import { sequelize } from "./init"

export class Category extends Model {
  id!: number
  title!: string
  value!: number
  winner!: number
  readonly createdAt!: Date
  readonly updatedAt!: Date
}

Category.init(
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
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    winner: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: "category"
  }
)
