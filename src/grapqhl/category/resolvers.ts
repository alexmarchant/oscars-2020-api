import { Category, Nominee } from '../../db'
import { Context } from '../../interfaces'

export default {
  Query: {
    async categories(
      parent: {},
      args: {},
      context: Context,
    ): Promise<Category[]> {
      const categories = await Category.findAll()
      if (!categories) {
        throw new Error('There are no categories')
      }
      return categories
    },
  },
  Mutation: {
    async setWinner(
      parent: {},
      args: { categoryId: number; nomineeId: number },
      context: Context,
    ): Promise<Category> {
      const { categoryId, nomineeId } = args
      const category = await Category.findByPk(categoryId)
      if (!category) {
        throw new Error("Can't find the category!")
      }

      category.winner = nomineeId
      await category.save()
      return category
    },
  },

  Category: {
    nominees: async (category: Category): Promise<Nominee[]> => {
      const nominees = await Nominee.findAll({
        where: { categoryId: category.id },
      })
      return nominees
    },
  },

  // Mutation: {}
}
