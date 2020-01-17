import { Model, DataTypes } from 'sequelize'
import { sequelize } from './init'

export class Selection extends Model {
  id!: number
  userId!: number
  categoryId!: number
  nomineeId!: number

  readonly createdAt!: Date
  readonly updatedAt!: Date
}

Selection.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: 'selection',
  },
)
