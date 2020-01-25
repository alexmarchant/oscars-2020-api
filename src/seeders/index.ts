import { config } from 'dotenv'
config()

import { initDB } from '../db'
import { createUser } from './users'
import { createCategories } from './categories'
import { createNoms } from './nominees'

async function runSeeders() {
  // await createUser('Larson Laidlaw', 'larson@gmail.com', 'test')
  // await createUser('Alex Marchant', 'alex@gmail.com', 'test')
  await createCategories()
  await createNoms()
}

initDB()
runSeeders()
