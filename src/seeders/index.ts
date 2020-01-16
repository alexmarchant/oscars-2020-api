import { createCategories } from "./categories"
import { createNoms } from "./nominees"

async function runSeeders() {
  await createCategories()
  await createNoms()
}

runSeeders()
