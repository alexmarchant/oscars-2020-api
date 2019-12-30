import { IResolvers } from 'graphql-tools'
import TestPayload from './models/TestPayload'
import { Context } from './server'

const resolvers: IResolvers = {
  Query: {
    testPayload: async (parent: {}, args: {}, { dataSources }: Context): Promise<TestPayload> => {
      return dataSources.testPayloadAPI.getFirst()
    },
  },
}

export default resolvers