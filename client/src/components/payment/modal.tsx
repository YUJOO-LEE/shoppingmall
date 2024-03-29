import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: PropsWithChildren) => {
  return createPortal(children, document.getElementById('modal')!);
}


const PaymentModal = ({
  show,
  proceed,
  cancel,
}: {
  show: boolean;
  proceed: () => void;
  cancel: () => void;
}) => {
  return show ? (
  <ModalPortal>
    <div className={`modal ${show ? 'show' : undefined}`}>
      <div className="modal__inner">
        <p>정말 결제할까요?</p>
        <div>
          <button onClick={proceed}>예</button>
          <button onClick={cancel}>아니오</button>
        </div>
      </div>
    </div>
  </ModalPortal>
  ): <></>;
}

export default PaymentModal;