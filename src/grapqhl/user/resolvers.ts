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

    mySelections(parent: {}, args: {}, context: Context): Promise<Selection[]> {
      const { user } = context
      if (!user) {
        throw new Error('Not logged in')
      }
      return Selection.findAll({ where: { userId: user.id } })
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
      args: { categoryId?: number; nomineeId?: number },
      context: Context,
    ): Promise<Selection> {
      const { user } = context
      const { categoryId, nomineeId } = args
      console.log({ user, categoryId, nomineeId })
      if (!user) {
        throw new Error('Not logged in')
      }

      if (!categoryId || !nomineeId) {
        throw new Error('Invalid selection')
      }

      // Clear out old selection for this category
      await Selection.destroy({
        where: {
          userId: user.id,
          categoryId: categoryId,
        },
      })

      // Add new selection
      const selection = await new Selection()
      selection.userId = user.id
      selection.categoryId = categoryId
      selection.nomineeId = nomineeId
      await selection.save()
      return selection
    },
    async updateUser(
      parent: {},
      args: { value: boolean },
      context: Context,
    ): Promise<User> {
      const { user } = context
      if (!user) {
        throw new Error('Not logged in')
      }

      const currentUser = await User.findByPk(user.id)
      if (!currentUser) {
        throw new Error('Not logged in')
      }

      currentUser.paid = args.value
      await currentUser.save()
      return currentUser
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
