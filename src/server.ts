import { ApolloServer, ServerInfo } from 'apollo-server'
import typeDefs from './schema'
import TestPayloadAPI from './datasources/TestPayloadAPI'
import resolvers from './resolvers'
import { initDB } from './db'

initDB()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: (): {} => ({
    testPayloadAPI: new TestPayloadAPI(),
  }),
})

const port = process.env.PORT || 3001

server.listen({ port }).then(({ url }: ServerInfo) => {
  console.log(`🚀 Server ready at ${url}`)
})
