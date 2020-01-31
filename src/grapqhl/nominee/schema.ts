import { gql } from 'apollo-server'

export default gql`
  type Nominee {
    id: Int!
    name: String!
    film: String!
    imageURL: String
  }
`
