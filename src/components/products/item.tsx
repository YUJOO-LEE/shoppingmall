import { TypeProduct } from "../../types";

function ProductItem({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: TypeProduct) {
  return (
    <li>
      <p>{category}</p>
      <p>{title}</p>
      <p>{description}</p>
      <img src={image} alt={title} />
      <span>${price}</span>
      <span>{rating.rate}</span>
    </li>
  )
}

export default ProductItem;