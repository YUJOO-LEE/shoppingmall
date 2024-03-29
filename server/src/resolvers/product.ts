import { Resolver, TypeProducts } from './types';
import { v4 as uuid } from 'uuid';
import { DBField, writeDB } from '../dbController';

const setJSON = (data: TypeProducts) => 
  writeDB(DBField.PRODUCTS, data);

const productResolver: Resolver = {
  Query: {
    products: (parent, { cursor = '', showDeleted = false }, { db }, info) => {
      const filteredDB = showDeleted ?db.products : db.products.filter(product => !! product.createdAt);
      const fromIndex = filteredDB.findIndex(product => product.id === cursor) + 1;
      return filteredDB.slice(fromIndex, fromIndex + 20) || [];
    },
    product: (parent, { id }, { db }, info) => {
      const found = db.products.find(item => item.id === id);
      if (found) return found;
      return null;
    },
  },
  Mutation: {
    addProduct: (parent, { imageUrl, price, title, description }, { db }) => {
      const newProduct = {
        id: uuid(),
        imageUrl,
        price,
        title,
        description,
        createdAt: Date.now(),
      }
      db.products.push(newProduct);
      setJSON(db.products);
      return newProduct;
    },

    updateProduct: (parent, { id, ...data }, { db }) => {
      const existProductIndex = db.products.findIndex(item => item.id === id);
      if (existProductIndex < 0) {
        throw new Error('없는 상품입니다');
      }

      const updatedItem = {
        ...db.products[existProductIndex],
        ...data,
      }
      db.products.splice(existProductIndex, 1, updatedItem);
      setJSON(db.products);
      return updatedItem;
    },

    deleteProduct: (parent, { id }, { db }) => {
      const existProductIndex = db.products.findIndex(item => item.id === id);
      if (existProductIndex < 0) {
        throw new Error('없는 상품입니다');
      }

      const updatedItem = {
        ...db.products[existProductIndex],
      }

      delete updatedItem.createdAt;
      db.products.splice(existProductIndex, 1, updatedItem);
      setJSON(db.products);
      return id;
    },
  }
}

export default productResolver;