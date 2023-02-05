import { gql } from 'apollo-server-express';

const cartSchema = gql`
  type TypeCartItem {
    id: ID!
    imageUrl: String!
    price: Int!
    title: String!
    amount: Int!
  }
  extend type Query {
    cart: [TypeCartItem!]
  }
  extend type Mutation {
    addCart(id: ID!): TypeCartItem!
    updateCart(id: ID!, amount: Int!): TypeCartItem!
    deleteCart(id: ID!): ID!
    executePay(ids: [ID!]): [ID!]
  }
`

export default cartSchema;
