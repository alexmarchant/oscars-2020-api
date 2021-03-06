import { Model, DataTypes } from "sequelize"
import { sequelize } from "./init"

export class Nominee extends Model {
  id!: number
  name!: string
  film!: string
  categoryId!: number
  imageURL?: string

  readonly createdAt!: Date
  readonly updatedAt!: Date
}

Nominee.init(
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
    film: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageURL: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: "nominee"
  }
)
