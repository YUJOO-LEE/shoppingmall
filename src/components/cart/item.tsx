import { useMutation } from "@tanstack/react-query";
import { ForwardedRef, forwardRef, SyntheticEvent } from "react";
import { DELETE_CART, TypeCart, UPDATE_CART } from "../../graphql/cart";
import { getClient, graphqlFetcher, QueryKeys } from "../../queryClient";

const CartItem = ({
  id,
  imageUrl,
  price,
  title,
  amount
}: TypeCart, ref: ForwardedRef<HTMLInputElement>) => {
  const queryClient = getClient();
  const { mutate: updateCart } = useMutation(
    ({id, amount}: {id: string, amount: number}) => 
      graphqlFetcher(UPDATE_CART, { id, amount }),
      {
        onMutate: async ({id, amount}) => {
          await queryClient.cancelQueries([QueryKeys.CART]);
          const prevCart = queryClient.getQueryData<{ [key: string]: TypeCart }>([QueryKeys.CART]);
          if (!prevCart?.[id]) return prevCart;

          const newCart = {
            ...(prevCart || {}),
            [id]: {...prevCart[id], amount},
          };
          queryClient.setQueryData([QueryKeys.CART], newCart);
          return prevCart;
        },
        onSuccess: newValue => {
          const prevCart = queryClient.getQueryData<{ [key: string]: TypeCart }>([QueryKeys.CART]);

          const newCart = {
            ...(prevCart || {}),
            [id]: newValue,
          };
          queryClient.setQueryData([QueryKeys.CART], newCart);
        }
      }
    );

  const { mutate: deleteCart } = useMutation(
    (id: string) => graphqlFetcher(DELETE_CART, { id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKeys.CART]);
      }
    }
  );

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    if (amount < 1) return;
    updateCart({id, amount});
  }

  const handleDeleteItem = () => {
    deleteCart(id);
  }

  return (
    <li className="cart-item">
      <input className="cart-item__checkbox" type="checkbox" name="select-item" ref={ref} />
      <img className="cart-item__image" src={imageUrl} alt={title} />
      <p className="cart-item__id">{id}</p>
      <p className="cart-item__title">{title}</p>
      <p className="cart-item__price">{price}</p>
      <input className="cart-item__amount" type="number"
        value={amount}
        onChange={handleUpdateAmount} />
      <button className="cart-item__button" type="button" onClick={handleDeleteItem}>삭제</button>
    </li>
  )
}

export default forwardRef(CartItem);