export type Resolver = {
  [key: string]: {
    [key: string]: (
      parent: any,
      args: { [key: string]: any },
      context: {
        db: {
          cart: TypeCart;
          products: TypeProducts;
        }
      },
      info: any
    ) => any;
  };
};

export type TypeProduct = {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  description: string;
  createdAt: number;
}

export type TypeProducts = TypeProduct[];

export type TypeCartItem = {
  id: string;
  amount: number;
}

export type TypeCart = TypeCartItem[];