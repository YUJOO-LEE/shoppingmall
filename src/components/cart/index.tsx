import { TypeCart } from "../../graphql/cart";
import CartItem from "./item";

const CartList = ({ cartItems }: {cartItems: TypeCart[]}) => {
  return (
    <ul className="cart">
      {cartItems.map(item => 
        <CartItem {...item} key={item.id} />
      )}
    </ul>
  )
}

export default CartList;