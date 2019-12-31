import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    testPayload: TestPayload!
    counter: Int!
  }

  type TestPayload {
    string: String!
    int: Int!
    float: Float!
    bool: Boolean!
  }

  type Mutation {
    incrementCounter: Int!
  }
`

export default typeDefs
