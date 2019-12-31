import { Model, DataTypes, Sequelize } from 'sequelize'

export default class Counter extends Model {
  id!: number
  count!: number
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

export function init(sequelize: Sequelize): void {
  Counter.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'counter',
    }
  )
}