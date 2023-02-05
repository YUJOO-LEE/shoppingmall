import { useQuery } from "@tanstack/react-query";
import CartList from "../../components/cart";
import { GET_CART, TypeCart } from "../../graphql/cart";
import { graphqlFetcher, QueryKeys } from "../../queryClient";

function CartPage() {
  const { data } = useQuery([QueryKeys.CART], () =>
    graphqlFetcher(GET_CART), {
      staleTime: 0,
      cacheTime: 1000,
    }
  )

  const cartItems = Object.values(data || {}) as TypeCart[];
  if (!cartItems.length) return <div>장바구니가 비었어요</div>

  return (
    <CartList cartItems={cartItems} />
  )
}

export default CartPage;