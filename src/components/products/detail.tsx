import { TypeProduct } from "../../types";

function ProductDetail({
  data: {
    category,
    title,
    description,
    image,
    price,
    rating: { rate },
  }
}: {
  data: TypeProduct
}) {
  return (
    <div>
      <p className="product-item__category">{category}</p>
        <p className="product-item__title">{title}</p>
        <img className="product-item__image" src={image} alt={title} />
        <span className="product-item__price">${price}</span>
        <span className="product-item__rating">{rate}</span>
        <p className="product-item__description">{description}</p>
    </div>
  )
}

export default ProductDetail;