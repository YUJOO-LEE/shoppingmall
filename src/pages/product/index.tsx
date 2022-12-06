import { useQuery } from "@tanstack/react-query";
import ProductItem from "../../components/products/item";
import GET_PRODUCTS, { TypeProducts } from "../../graphql/products";
import { graphqlFetcher, QueryKeys } from "../../queryClient";

function ProductList() {
  // const { data } = useQuery<TypeProduct[]>({
  //   queryKey: [QueryKeys.PRODUCTS], 
  //   queryFn: () => restFetcher({
  //       method: 'GET',
  //       path: '/products'
  //     })
  // })
  const { data } = useQuery<TypeProducts>({
      queryKey: [QueryKeys.PRODUCTS], 
      queryFn: () => graphqlFetcher(GET_PRODUCTS)
    });

  return (
    <div>
      <h2>상품 목록</h2>
      <ul className="products">
        {data?.products?.map(product=>(
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;