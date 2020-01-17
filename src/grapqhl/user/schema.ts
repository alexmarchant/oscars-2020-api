import { gql } from 'apollo-server'

export default gql`
  extend type Query {
    me: User
    users: [User]
  }

  extend type Mutation {
    signup(name: String!, email: String!, password: String!): String
    login(email: String!, password: String!): String
    makeSelection(category: Int!, nominee: Int!): Selection
  }

  type User {
    id: Int!
    name: String!
    email: String!
    selections: [Selection]
  }

  type Selection {
    id: Int!
    userId: Int!
    categoryId: Int!
    nomineeId: Int!
  }
`
