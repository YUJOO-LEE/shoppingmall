import { atom } from "recoil";
import { TypeCart } from "../graphql/cart";

export const checkedCartState = atom<TypeCart[]>({
  key: 'cartState',
  default: [],
});

