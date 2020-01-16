import { gql } from "apollo-server"

export default gql`
  extend type Query {
    me: User
    users: [User]
  }

  extend type Mutation {
    signup(name: String!, email: String!, password: String!): String
    login(email: String!, password: String!): String
  }

  type User {
    id: Int!
    name: String!
    email: String!
  }
`
