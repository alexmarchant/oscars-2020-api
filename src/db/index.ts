import { sequelize } from "./init"
import { User } from "./user"
import { Todo } from "./todo"
import { Category } from "./category"

Todo.belongsTo(User)

export { User, Todo, Category }
export async function initDB(): Promise<void> {
  await sequelize.sync()
}
