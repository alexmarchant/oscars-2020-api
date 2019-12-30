import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    testPayload: TestPayload!
  }

  type TestPayload {
    string: String!
    int: Int!
    float: Float!
    bool: Boolean!
  }
`

export default typeDefs
