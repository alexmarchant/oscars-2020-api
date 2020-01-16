import { sequelize } from "./init"
import { User } from "./user"
import { Todo } from "./todo"
import { Category } from "./category"
import { Nominee } from "./nominee"

Todo.belongsTo(User)
Nominee.belongsTo(Category)

export { User, Todo, Category, Nominee }
export async function initDB(): Promise<void> {
  await sequelize.sync()
}
