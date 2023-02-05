import { useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { ADD_CART } from '../../graphql/cart';
import { TypeProduct } from '../../graphql/products';
import { graphqlFetcher } from '../../queryClient';

function ProductItem({
  id,
  imageUrl,
  price,
  title,
}: TypeProduct) {
  const { mutate: addToCart } = useMutation((id: string) => graphqlFetcher(ADD_CART, { id }));

  return (
    <li className='product-item'>
      <Link to={`/product/${id}`}>
        <p className='product-item__title'>{title}</p>
        <img className='product-item__image' src={imageUrl} alt={title} />
        <span className='product-item__price'>${price}</span>
      </Link>
      <button className='product-item__add-cart' onClick={() => addToCart(id)}>담기</button>
    </li>
  )
}

export default ProductItem;