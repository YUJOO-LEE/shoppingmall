import ProductItem from "../../components/products/item";
import { TypeProduct } from "../../graphql/products";

const ProductsList = ({ list }: { list: TypeProduct[] }) => {

  return (
    <ul className="products">
      {list.map(product=>(
        <ProductItem {...product} key={product.id} />
      ))}
    </ul>
  )
}

export default ProductsList;