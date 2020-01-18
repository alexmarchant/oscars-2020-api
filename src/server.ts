import { config } from 'dotenv'
config()
import { typeDefs, resolvers } from './grapqhl'
import { ApolloServer } from 'apollo-server'
import { User, initDB } from './db'
import { Context } from './interfaces'
import { verify } from 'jsonwebtoken'

initDB()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  async context({ req }): Promise<Context> {
    if (!process.env.JWT_SECRET) {
      throw new Error('Missing JWT_SECRET env var')
    }
    const token = req.headers.authorization?.replace('Bearer ', '')
    if (!token) return {}
    const user = verify(token, process.env.JWT_SECRET) as User
    return { user }
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
