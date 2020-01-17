import bcrypt from 'bcrypt'
import { User } from '../../db'
import { Context } from '../../interfaces'

const saltRounds = 10

export default {
  Query: {
    me(parent: {}, args: {}, context: Context): User {
      const { user } = context
      if (!user) {
        throw new Error('Not logged in')
      }
      return user
    },

    async users(parent: {}, args: {}, context: Context): Promise<User[]> {
      const users = await User.findAll()
      if (!users) {
        throw new Error('There are no users')
      }
      return users
    },
  },
  Mutation: {
    async login(
      parent: {},
      args: { email?: string; password?: string },
    ): Promise<string> {
      if (!args.email || !args.password) {
        throw new Error('Missing required args')
      }
      const user = await User.findOne({ where: { email: args.email } })
      if (!user) {
        throw new Error('No user with that email')
      }
      if (!(await bcrypt.compare(args.password, user.hashedPassword))) {
        throw new Error('Invalid password')
      }
      return '1234'
    },

    async signup(
      parent: {},
      args: { name?: string; email?: string; password?: string },
    ): Promise<string> {
      const { name, email, password } = args
      if (!name || !email || !password) {
        throw new Error('Missing required args')
      }
      const existingUser = await User.findOne({
        where: { email: email },
      })
      if (existingUser) {
        throw new Error('User with that email exists')
      }
      const user = new User()
      user.name = name
      user.email = email
      user.hashedPassword = await bcrypt.hash(args.password, saltRounds)
      await user.save()
      return '1234'
    },
  },
}
