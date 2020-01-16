import baseSchema from "./baseSchema"
import user from "./user"
import todo from "./todo"

// prettier-ignore
export const typeDefs = [
    baseSchema,
    user.schema,
    todo.schema
  ]

// prettier-ignore
export const resolvers = [
  user.resolvers,
  todo.resolvers,
]
