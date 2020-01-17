import baseSchema from './baseSchema'
import user from './user'
import todo from './todo'
import category from './category'
import nominee from './nominee'

// console.log(category)

// prettier-ignore
export const typeDefs = [
    baseSchema,
    user.schema,
    todo.schema,
    category.schema,
    nominee.schema,
  ]

// prettier-ignore
export const resolvers = [
  user.resolvers,
  todo.resolvers,
  category.resolvers,
]
