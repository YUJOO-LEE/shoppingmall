import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { checkedCartState } from "../../recoils/cart";
import WillPay from "../willPay";
import PaymentModal from "./modal";

const Payment = () => {
  const navigator = useNavigate();
  const setCheckedCartData = useSetRecoilState(checkedCartState);
  const [modalShown, toggleModal] = useState(false);

  const showModal = () => {
    toggleModal(true);
  }

  const proceed = () => {
    setCheckedCartData([]);
    navigator('/product', { replace: true });
  }

  const cancel = () => {
    toggleModal(false);
  }

  return (
    <div>
      <WillPay handleSubmit={showModal} submitTitle='구매하기' />
      <PaymentModal show={modalShown} proceed={proceed} cancel={cancel} />
    </div>
  )
}

export default Payment;