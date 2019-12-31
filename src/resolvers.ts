import { IResolvers } from 'graphql-tools'
import TestPayload from './models/TestPayload'
import { Context } from './server'

const resolvers: IResolvers = {
  Query: {
    testPayload(parent: {}, args: {}, { dataSources }: Context): Promise<TestPayload> {
      return dataSources.testPayloadAPI.getFirst()
    },
    counter(parent: {}, args: {}, { dataSources }: Context): Promise<number> {
      return dataSources.counterAPI.getCount()
    },
  },
  Mutation: {
    incrementCounter(parent: {}, args: {}, { dataSources }: Context): Promise<number> {
      return dataSources.counterAPI.incrementCount()
    },
  },
}

export default resolvers