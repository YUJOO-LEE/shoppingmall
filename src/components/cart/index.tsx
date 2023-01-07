import { TypeCart } from "../../graphql/cart";
import CartItem from "./item";

const CartList = ({ cartItems }: {cartItems: TypeCart[]}) => {
  return (
    <ul>
      {cartItems.map(item => 
        <CartItem {...item} key={item.id} />
      )}
    </ul>
  )
}

export default CartList;