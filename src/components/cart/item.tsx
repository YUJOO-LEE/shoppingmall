import { useMutation } from "@tanstack/react-query";
import { SyntheticEvent } from "react";
import { TypeCart, UPDATE_CART } from "../../graphql/cart";
import { graphqlFetcher } from "../../queryClient";

const CartItem = ({
  id,
  imageUrl,
  price,
  title,
  amount
}: TypeCart) => {
  const { mutate: updateCart } = useMutation(({id, amount}: {id: string, amount: number}) => 
    graphqlFetcher(UPDATE_CART, { id, amount }));

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    updateCart({id, amount});
  }

  return (
    <li>
      <img src={imageUrl} alt={title} />
      <p className="cart-item__price">{id}</p>
      <p className="cart-item__title">{title}</p>
      <p className="cart-item__price">{price}</p>
      <input type="number" className="cart-item__amount" value={amount}
        onChange={handleUpdateAmount} />
    </li>
  )
}

export default CartItem;