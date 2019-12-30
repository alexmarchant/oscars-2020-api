import { Model, DataTypes, Sequelize } from 'sequelize'

export default class TestPayload extends Model {
  id!: number
  string!: string
  int!: number
  float!: number
  bool!: boolean
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

export function init(sequelize: Sequelize): void {
  TestPayload.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      string: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      int: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      float: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      bool: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'test_payload',
    }
  )
}