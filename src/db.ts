import { Sequelize } from 'sequelize'
import TestPayload, { init as initTestPayload } from './models/TestPayload'

const sequelize = new Sequelize('sqlite::memory:')

export async function initDB(): Promise<void> {
  initTestPayload(sequelize)
  await sequelize.sync()

  const newPayload = new TestPayload()
  newPayload.string = 'A string'
  newPayload.int = 1
  newPayload.float = 1.23456
  newPayload.bool = false
  await newPayload.save()
}
