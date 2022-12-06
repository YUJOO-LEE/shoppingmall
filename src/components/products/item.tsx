import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { TypeProduct } from "../../graphql/products";
import { cartSelector } from "../../recoils/cart";

function ProductItem({
  id,
  imageUrl,
  price,
  title,
}: TypeProduct) {
  const [cartAmount, setCartAmount] = useRecoilState(cartSelector(id));
  const addToCart = () => setCartAmount(prev => (prev || 0) + 1);

  return (
    <li className="product-item">
      <Link to={`/product/${id}`}>
        <p className="product-item__title">{title}</p>
        <img className="product-item__image" src={imageUrl} alt={title} />
        <span className="product-item__price">${price}</span>
      </Link>
      <button className="product-item__add-cart" onClick={addToCart}>담기</button>
      <span>{cartAmount || 0}</span>
    </li>
  )
}

export default ProductItem;