import { Resolver } from "./types";

const mockProducts = (() =>
Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1 + '',
  imageUrl: `https://picsum.photos/id/${i + 10}/200/150`,
  price: 50000,
  title: `임시상품${i + 1}`,
  description: `임시상세내용${i + 1}`,
  createdAt: new Date(1645735501883 + i * 1000 * 60 * 60 * 10).toString(),
})))()

let cartData = [{ id: '1', amount: 1}, { id: '2', amount: 2}];

const cartResolver: Resolver = {
  Query: {
    products: (parent, args, context, info) => {
      return cartData;
    },
  },
  Mutation: {
    addCart: (parent, { id }, context, info) => {
      const newCartData = { ...cartData };
      const targetProduct = mockProducts.find(item => item.id === id);
  
      if (!targetProduct) {
        throw new Error('상품이 없습니다');
      }
  
      const newItem = {
        ...targetProduct,
        amount: (newCartData[id]?.amount || 0) + 1,
      }
      newCartData[id] = newItem;
  
      cartData = newCartData;
      return newItem;
    },
    updateCart: (parent, { id, amount }, context, info) => {
      const newCartData = { ...cartData };
  
      if (!newCartData[id]) {
        throw new Error('없는 데이터입니다');
      }
  
      const newItem = {
        ...newCartData[id],
        amount,
      };
  
      newCartData[id] = newItem;
      cartData = newCartData;
      return newItem;
    },
    deleteCart: (parent, { id }, context, info) => {
      const newCartData = { ...cartData };
      delete newCartData[id];
      cartData = newCartData;
      return id;  
    },
    executePay: (parent, { ids }, context, info) => {
      const newCartData = cartData.filter(cartItem => !ids.includes(cartItem.id))
      cartData = newCartData;
      return ids;  
    },
  }
}

export default cartResolver;