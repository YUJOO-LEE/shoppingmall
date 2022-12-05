import { useQuery } from "@tanstack/react-query";
import ProductItem from "../../components/products/item";
import { fetcher, QueryKeys } from "../../queryClient";
import { TypeProduct } from "../../types";

function ProductList() {
  const { data } = useQuery<TypeProduct[]>({
    queryKey: [QueryKeys.PRODUCTS], 
    queryFn: () => fetcher({
        method: 'GET',
        path: '/products'
      })
  })

  return (
    <div>
      <h2>상품 목록</h2>
      <ul className="products">
        {data?.map(product=>(
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;