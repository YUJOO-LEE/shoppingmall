import { SyntheticEvent } from "react";
import { useRecoilValue } from "recoil"
import { checkedCartState } from "../../recoils/cart"
import ItemData from "../cart/itemData";


const WillPay = ({
  handleSubmit,
  submitTitle,
}: {
  handleSubmit: (e: SyntheticEvent) => void;
  submitTitle: string;
}) => {

  const checkedItems = useRecoilValue(checkedCartState);

  const totalPrice = checkedItems.reduce((res, { price, amount }) => {
    res += price * amount;
    return res;
  }, 0);

  return (
    <div className="willpay">
      <ul>
        {checkedItems.map(({imageUrl, price, title, id, amount}) => 
          <li key={id}>
            <ItemData imageUrl={imageUrl} price={price} title={title} />
            <p>수량 : {amount}</p>
            <p>금액 : {price * amount}</p>
          </li>)}
      </ul>
      <p className="willpay__total">총 예상 결제금액 : {totalPrice}</p>
      <button onClick={handleSubmit}>{submitTitle}</button>
    </div>
  )
}

export default WillPay;