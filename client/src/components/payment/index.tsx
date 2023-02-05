import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { EXECUTE_PAY } from "../../graphql/payment";
import { graphqlFetcher } from "../../queryClient";
import { checkedCartState } from "../../recoils/cart";
import WillPay from "../willPay";
import PaymentModal from "./modal";

type TypePayInfos = string[];

const Payment = () => {
  const navigator = useNavigate();
  const [checkedCartData, setCheckedCartData] = useRecoilState(checkedCartState);
  const [modalShown, toggleModal] = useState(false);
  const { mutate: executePay } = useMutation(
    (payInfos: TypePayInfos) => graphqlFetcher(EXECUTE_PAY, payInfos)
  );

  const showModal = () => {
    toggleModal(true);
  }

  const proceed = () => {
    const payInfos = checkedCartData.map(({ id }) => (id));

    executePay(payInfos);
    setCheckedCartData([]);
    alert('결제가 완료되었습니다.');
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