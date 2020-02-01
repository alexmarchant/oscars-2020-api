import baseSchema from './baseSchema'
import user from './user'
// import todo from './todo'
import category from './category'
import nominee from './nominee'

// prettier-ignore
export const typeDefs = [
    baseSchema,
    user.schema,
    category.schema,
    nominee.schema,
  ]

// prettier-ignore
export const resolvers = [
  user.resolvers,
  category.resolvers,
]
