import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'

const server = new ApolloServer({ typeDefs })

const port = process.env.PORT || 3001

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
