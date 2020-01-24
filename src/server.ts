import { config } from 'dotenv'
config()
import { typeDefs, resolvers } from './grapqhl'
import { ApolloServer } from 'apollo-server'
import { Request } from 'express'
import { User, initDB } from './db'
import { Context } from './interfaces'
import { verify } from 'jsonwebtoken'
import { getCategoryNomineesLoader } from './grapqhl/nominee'

initDB()

function getUser(req: Request): User | undefined {
  if (!process.env.JWT_SECRET) {
    throw new Error('Missing JWT_SECRET env var')
  }
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return
  return verify(token, process.env.JWT_SECRET) as User
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  async context({ req }): Promise<Context> {
    return {
      user: getUser(req),
      categoryNomineesLoader: getCategoryNomineesLoader(),
    }
  },
})

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀  Server ready at ${url}`)
  console.log(`🚀  Subscriptions ready at ${subscriptionsUrl}`)
})
