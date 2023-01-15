import { TypeCart } from "../../graphql/cart";

const ItemData = ({ imageUrl, title, price }: Pick<TypeCart, 'imageUrl' | 'price' | 'title'>) => {
  return (
    <>
      <img className="cart-item__image" src={imageUrl} alt={title} />
      <p className="cart-item__title">{title}</p>
      <p className="cart-item__price">{price}</p>
    </>
  )
}

export default ItemData;