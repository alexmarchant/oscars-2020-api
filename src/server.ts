import { ApolloServer, ServerInfo } from 'apollo-server'
import typeDefs from './schema'
import CounterAPI from './datasources/CounterAPI'
import TestPayloadAPI from './datasources/TestPayloadAPI'
import resolvers from './resolvers'
import { initDB } from './db'

initDB()

interface DataSources {
  testPayloadAPI: TestPayloadAPI;
  counterAPI: CounterAPI;
}

export interface Context {
  dataSources: DataSources;
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: (): {} => ({
    testPayloadAPI: new TestPayloadAPI(),
    counterAPI: new CounterAPI(),
  }),
})

const port = process.env.PORT || 3001

server.listen({ port }).then(({ url }: ServerInfo) => {
  console.log(`🚀 Server ready at ${url}`)
})
