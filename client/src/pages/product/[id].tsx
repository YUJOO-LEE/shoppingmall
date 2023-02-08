import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import ProductDetail from "../../components/products/detail";
import { TypeProduct, GET_PRODUCT } from "../../graphql/products";
import { graphqlFetcher, QueryKeys } from "../../queryClient";

function ProductDetailPage() {
  const { id } = useParams();
  const { data } = useQuery<{product: TypeProduct}>({
    queryKey: [QueryKeys.PRODUCTS, id], 
    queryFn: () => graphqlFetcher(GET_PRODUCT, { id })
  })

  return (
    <>
      <h2>상품 상세</h2>
      {data && 
        <ProductDetail data={data.product} />
      }
    </>
  )
}

export default ProductDetailPage;