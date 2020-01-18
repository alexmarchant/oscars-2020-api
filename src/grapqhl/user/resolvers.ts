import bcrypt from 'bcrypt'
import { User, Selection } from '../../db'
import { Context } from '../../interfaces'
import { sign } from 'jsonwebtoken'

function makeJWT(user: User): string {
  if (!process.env.JWT_SECRET) {
    throw new Error('Missing JWT_SECRET env var')
  }

  const payload = user.toJSON() as any
  delete payload.hashedPassword
  return sign(payload, process.env.JWT_SECRET)
}

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
      const { email, password } = args
      if (!email || !password) {
        throw new Error('Missing required args')
      }
      const user = await User.findOne({ where: { email } })
      if (!user) {
        throw new Error('No user with that email')
      }
      if (!(await bcrypt.compare(password, user.hashedPassword))) {
        throw new Error('Invalid password')
      }
      return makeJWT(user)
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
      user.hashedPassword = await bcrypt.hash(password, 10)
      await user.save()
      return makeJWT(user)
    },

    async makeSelection(
      parent: {},
      args: { category?: number; nominee?: number },
      context: Context,
    ): Promise<Selection> {
      const { user } = context
      const { category, nominee } = args
      console.log({ user, category, nominee })
      if (!user) {
        throw new Error('Not logged in')
      }

      if (!category || !nominee) {
        throw new Error('Invalid selection')
      }

      const selection = await new Selection()
      selection.userId = user.id
      selection.categoryId = category
      selection.nomineeId = nominee
      await selection.save()
      return selection
    },
  },

  User: {
    async selections(user: User): Promise<Selection[]> {
      console.log('USER selections')

      const selections = await Selection.findAll({
        where: { userId: user.id },
      })

      if (!selections) {
        throw new Error('there are no selections')
      }
      return selections
    },
  },
}

// selections: async (user: User): Promise<Selection[]> => {
//       console.log('USER selections')

//       const selections = await Selection.findAll({
//         where: { userId: user.id },
//       })
//       return selections
//     },
