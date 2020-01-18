import { config } from 'dotenv'
config()
import { createUser } from './users'
import { createCategories } from './categories'
import { createNoms } from './nominees'

async function runSeeders() {
  await createUser('Larson Laidlaw', 'larsonlaidlaw@gmail.com', 'testing12345')
  await createCategories()
  await createNoms()
}

runSeeders()
