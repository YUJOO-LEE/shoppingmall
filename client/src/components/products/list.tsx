import ProductItem from '../../components/products/item';
import { TypeProduct } from '../../graphql/products';

const ProductsList = ({ 
  list,
}: { 
  list: { products: TypeProduct[] }[] 
}) => {

  return (
    <ul className='products'>
      {list.map(page => page.products.map(
        product => <ProductItem {...product} key={product.id} />
      ))}
    </ul>
  )
}

export default ProductsList;