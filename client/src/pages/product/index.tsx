import { useQuery } from "@tanstack/react-query";
import ProductsList from "../../components/products/list";
import GET_PRODUCTS, { TypeProducts } from "../../graphql/products";
import { graphqlFetcher, QueryKeys } from "../../queryClient";

function ProductListPage() {
  const { data } = useQuery<TypeProducts>({
    queryKey: [QueryKeys.PRODUCTS], 
    queryFn: () => graphqlFetcher(GET_PRODUCTS)
  });

  return (
    <div>
      <h2>상품 목록</h2>
      <ProductsList list={data?.products || []} />
    </div>
  );
}

export default ProductListPage;