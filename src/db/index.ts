import { sequelize } from './init'
import { User } from './user'
import { Todo } from './todo'
import { Category } from './category'
import { Nominee } from './nominee'
import { Selection } from './selection'

Todo.belongsTo(User)
Nominee.belongsTo(Category)
Selection.belongsTo(Category)
Selection.belongsTo(Nominee)
Selection.belongsTo(User)

export { User, Todo, Category, Nominee, Selection }
export async function initDB(): Promise<void> {
  await sequelize.sync()
}
