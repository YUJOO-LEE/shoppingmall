import { Link } from "react-router-dom";
import { TypeProduct } from "../../types";

function ProductItem({
  category,
  id,
  image,
  price,
  rating,
  title,
}: TypeProduct) {
  return (
    <li className="product-item">
      <Link to={`/product/${id}`}>
        <p className="product-item__category">{category}</p>
        <p className="product-item__title">{title}</p>
        <img className="product-item__image" src={image} alt={title} />
        <span className="product-item__price">${price}</span>
        <span className="product-item__rating">{rating.rate}</span>
      </Link>
    </li>
  )
}

export default ProductItem;