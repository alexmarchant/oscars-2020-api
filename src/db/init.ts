import { Sequelize } from 'sequelize'

if (!process.env.DATABASE_URL) {
  throw new Error('Missing DATABASE_URL env var')
}

export const sequelize = new Sequelize(process.env.DATABASE_URL)
