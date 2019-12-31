import { Sequelize } from 'sequelize'
import TestPayload, { init as initTestPayload } from './models/TestPayload'
import Counter, { init as initCounter } from './models/Counter'

const sequelize = new Sequelize('sqlite::memory:')

export async function initDB(): Promise<void> {
  initTestPayload(sequelize)
  initCounter(sequelize)
  await sequelize.sync()

  const newPayload = new TestPayload()
  newPayload.string = 'A string'
  newPayload.int = 1
  newPayload.float = 1.23456
  newPayload.bool = false
  await newPayload.save()

  const newCounter = new Counter()
  newCounter.count = 0
  await newCounter.save()
}
