import { gql } from 'apollo-server-express';

const productSchema = gql`
  type TypeProduct {
    id: ID!
    imageUrl: String!
    price: Int!
    title: String!
    description: String
    createdAt: Float
  }
  extend type Query {
    products: [TypeProduct!]
    product(id: ID!): TypeProduct!
  }
`

export default productSchema;
