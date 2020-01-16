import { User, Category, Todo } from "../db"
import { Context } from "../interfaces"

export const resolvers = {
  Query: {
    me(parent: {}, args: {}, context: Context): User {
      const { user } = context
      if (!user) {
        throw new Error("Not logged in")
      }
      return user
    },

    users(parent: {}, args: {}, context: Context): Promise<User[]> {
      const users = User.findAll()
      if (!users) {
        throw new Error("There are no users")
      }
      return users
    },

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
    async login(
      parent: {},
      args: { name?: string; email?: string; password?: string }
    ): Promise<string> {
      if (!args.email || !args.password) {
        throw new Error("Missing required args")
      }
      const user = await User.findOne({ where: { email: args.email } })
      if (!user) {
        throw new Error("No user with that email")
      }
      if (user.password !== args.password) {
        throw new Error("Invalid password")
      }
      return "1234"
    },

    async signup(
      parent: {},
      args: { name?: string; email?: string; password?: string }
    ): Promise<string> {
      const { name, email, password } = args
      if (!name || !email || !password) {
        throw new Error("Missing required args")
      }
      const existingUser = await User.findOne({
        where: { email: email }
      })
      if (existingUser) {
        throw new Error("User with that email exists")
      }
      const user = new User()
      user.name = name
      user.email = email
      user.password = password
      await user.save()
      return "1234"
    },

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
