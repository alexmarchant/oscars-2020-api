import { gql } from 'apollo-server'

export default gql`
  extend type Query {
    me: User
    users: [User]
    mySelections: [Selection]
  }

  extend type Mutation {
    signup(name: String!, email: String!, password: String!): String
    login(email: String!, password: String!): String
    makeSelection(categoryId: Int!, nomineeId: Int!): Selection
    updateUser(value: Boolean!): User
  }

  type User {
    id: Int!
    name: String!
    email: String!
    admin: Boolean!
    paid: Boolean!
    selections: [Selection]
  }

  type Selection {
    id: Int!
    userId: Int!
    categoryId: Int!
    nomineeId: Int!
  }
`
