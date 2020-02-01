import { config } from 'dotenv'
config()

import { initDB } from '../db'
import { createUser } from './users'
import { createCategories } from './categories'
import { createNoms } from './nominees'

async function runSeeders() {
  // await createUser('Larson Laidlaw', 'larsonlaidlaw@gmail.com', 'kobe24ever')
  // await createUser('Alex Marchant', 'alexjmarchant@gmail.com', 'kobe24ever')
  await createCategories()
  await createNoms()
}

initDB()
runSeeders()
