import { Link } from "react-router-dom";
import { TypeProduct } from "../../graphql/products";

function ProductItem({
  id,
  imageUrl,
  price,
  title,
}: TypeProduct) {
  return (
    <li className="product-item">
      <Link to={`/product/${id}`}>
        <p className="product-item__title">{title}</p>
        <img className="product-item__image" src={imageUrl} alt={title} />
        <span className="product-item__price">${price}</span>
      </Link>
    </li>
  )
}

export default ProductItem;