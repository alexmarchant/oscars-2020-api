import { PubSub } from 'apollo-server'
import { Category, Nominee } from '../../db'
import { Context } from '../../interfaces'

const CATEGORY_UPDATED = 'CATEGORY_UPDATED'
const pubsub = new PubSub()

export default {
  Query: {
    async categories(
      parent: {},
      args: {},
      context: Context,
    ): Promise<Category[]> {
      const categories = await Category.findAll({ order: [['id', 'ASC']] })
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

      category.winnerId = nomineeId
      await category.save()
      pubsub.publish(CATEGORY_UPDATED, { categoryUpdated: category })
      return category
    },
  },
  Subscription: {
    categoryUpdated: {
      subscribe() {
        return pubsub.asyncIterator([CATEGORY_UPDATED])
      }
    }
  },

  Category: {
    nominees: (
      category: Category,
      args: {},
      context: Context,
    ): Promise<Nominee[]> => {
      return context.categoryNomineesLoader.load(category.id)
    },
  },
}
