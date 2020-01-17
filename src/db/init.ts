import { Sequelize } from 'sequelize'

let pgurl
if (process.env.NODE_ENV === 'production') {
  if (!process.env.DATABASE_URL) {
    throw new Error('Missing DATABASE_URL env var')
  }
  pgurl = process.env.DATABASE_URL
} else {
  pgurl = 'postgres://localhost:5432/oscars2020'
}

export const sequelize = new Sequelize(pgurl)
