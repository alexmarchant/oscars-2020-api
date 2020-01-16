import { gql } from "apollo-server"

export default gql`
  extend type Query {
    todos: [Todo]
  }

  extend type Mutation {
    createTodo(title: String!): Todo
    deleteTodo(id: Int!): Todo
    updateTodo(id: Int!, title: String!, done: Boolean!): Todo
  }

  type Todo {
    id: Int!
    title: String!
    done: Boolean!
    userId: Int!
  }
`
