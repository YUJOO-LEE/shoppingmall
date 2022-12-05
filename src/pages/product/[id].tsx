import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import ProductDetail from "../../components/products/detail";
import { fetcher, QueryKeys } from "../../queryClient";
import { TypeProduct } from "../../types";

function ProductDetailPage() {
  const { id } = useParams();
  const { data } = useQuery<TypeProduct>({
    queryKey: [QueryKeys.PRODUCTS, id], 
    queryFn: () => fetcher({
        method: 'GET',
        path: `/products/${id}`,
      })
  })

  return (
    <>
      <h2>상품 상세</h2>
      {data && 
        <ProductDetail data={data} />
      }
    </>
  )
}

export default ProductDetailPage;