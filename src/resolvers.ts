import TestPayloadAPI from './datasources/TestPayloadAPI'
import TestPayload from './models/TestPayload'

interface DataSources {
  testPayloadAPI: TestPayloadAPI;
}

export default {
  Query: {
    testPayload: async (parent: {}, args: {}, { dataSources }: { dataSources: DataSources }): Promise<TestPayload> => {
      console.log('test')
      return dataSources.testPayloadAPI.getFirst()
    },
  },
}