import { gql } from "apollo-server"

export const typeDefs = gql`
  type Query {
    me: User
    todos: [Todo]
    users: [User]
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!): String
    login(email: String!, password: String!): String
    createTodo(title: String!): Todo
    deleteTodo(id: Int!): Todo
    updateTodo(id: Int!, title: String!, done: Boolean!): Todo
  }

  type User {
    id: Int!
    name: String!
    email: String!
  }

  type Todo {
    id: Int!
    title: String!
    done: Boolean!
    userId: Int!
  }
`
