import { gql } from "apollo-server"

export default gql`
  # extend type Query {
  #   categories: [Category]
  # }

  # extend type Mutation {

  # }

  type Nominee {
    id: Int!
    name: String!
    film: String!
  }
`
