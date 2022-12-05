import { useQuery } from "@tanstack/react-query";
import { fetcher, QueryKeys } from "../../queryClient";

function ProductList() {
  const { data } = useQuery({
    queryKey: [QueryKeys.PRODUCTS], 
    queryFn: ()=> fetcher({
        method: 'GET',
        path: '/products'
      })
  })
  console.log(data);
  
  return (
    <div>ProductList</div>
  );
}

export default ProductList;