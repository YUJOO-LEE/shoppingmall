import { gql } from 'graphql-tag';
import { TypeProduct } from './products';

export type TypeCart = {
  id: string;
  amount: number;
  product: TypeProduct;
}

export const ADD_CART = gql`
  mutation ADD_CART($id: ID!) {
    cart(id: $id) {
      id
      amount
      product {
        id
        imageUrl
        price
        title
        description
        createdAt
      }
    }
  }
`;

export const UPDATE_CART = gql`
  mutation UPDATE_CART($id: ID!, $amount: Int!) {
    cart(id: $id, amount: $amount) {
      id
      amount
      product {
        id
        imageUrl
        price
        title
        description
        createdAt
      }
    }
  }
`;

export const GET_CART = gql`
  query GET_CART {
    cart {
      id
      amount
      product {
        id
        imageUrl
        price
        title
        description
        createdAt
      }
    }
  }
`;

export const DELETE_CART = gql`
  mutation DELETE_CART($id: ID!) {
    cart(id: $id) {
      id
    }
  }
`;