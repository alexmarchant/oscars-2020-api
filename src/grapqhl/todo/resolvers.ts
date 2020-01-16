import { Todo } from "../../db"
import { Context } from "../../interfaces"

export default {
  Query: {
    async todos(parent: {}, args: {}, context: Context): Promise<Todo[]> {
      const { user } = context
      if (!user) {
        throw new Error("Not logged in")
      }
      const todos = await Todo.findAll({ where: { userId: user.id } })
      if (!todos) {
        throw new Error("Not found")
      }
      return todos
    }
  },

  Mutation: {
    async createTodo(
      parent: {},
      args: { title?: string },
      context: Context
    ): Promise<Todo> {
      const { user } = context
      if (!user) {
        throw new Error("Not logged in")
      }
      if (!args.title) {
        throw new Error("Missing required args")
      }
      const todo = new Todo()
      todo.title = args.title
      todo.userId = user.id
      await todo.save()
      return todo
    },

    async deleteTodo(
      parent: {},
      args: { id?: number },
      context: Context
    ): Promise<Todo> {
      const { user } = context
      if (!user) {
        throw new Error("Not logged in")
      }
      if (!args.id) {
        throw new Error("Missing required args")
      }
      const todo = (await Todo.findByPk(args.id)) as Todo
      if (!todo) {
        throw new Error("Todo with that id does not exist")
      }
      await todo.destroy()
      return todo
    },

    async updateTodo(
      parent: {},
      args: { id?: number; title?: string; done?: boolean },
      context: Context
    ): Promise<Todo> {
      const { user } = context
      if (!user) {
        throw new Error("Not logged in")
      }
      if (!args.id || !args.title || typeof args.done !== "boolean") {
        throw new Error("Missing required args")
      }
      const todo = (await Todo.findByPk(args.id)) as Todo
      if (!todo) {
        throw new Error("Todo with that id does not exist")
      }
      todo.title = args.title
      todo.done = args.done
      await todo.save()
      return todo
    }
  }
}
