import { gql } from 'apollo-server'

export default gql`
  extend type Query {
    categories: [Category]
  }

  extend type Mutation {
    setWinner(categoryId: Int!, nomineeId: Int): Category!
  }

  type Category {
    id: Int!
    title: String!
    value: Int!
    winnerId: Int
    nominees: [Nominee]
  }

  extend type Subscription {
    categoryUpdated: Category
  }
`
