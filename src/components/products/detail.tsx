import { TypeProduct } from "../../graphql/products";

function ProductDetail({
  data: {
    title,
    description,
    imageUrl,
    price,
  }
}: {
  data: TypeProduct
}) {
  return (
    <div>
      <p className="product-item__title">{title}</p>
      <img className="product-item__image" src={imageUrl} alt={title} />
      <span className="product-item__price">${price}</span>
      <p className="product-item__description">{description}</p>
    </div>
  )
}

export default ProductDetail;