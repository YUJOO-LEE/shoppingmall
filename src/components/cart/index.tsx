import { createRef, SyntheticEvent, useRef } from "react";
import { TypeCart } from "../../graphql/cart";
import CartItem from "./item";

const CartList = ({ cartItems }: {cartItems: TypeCart[]}) => {

  const formRef = useRef<HTMLFormElement>(null);
  const checkboxRefs = cartItems.map(() => createRef<HTMLInputElement>())

  const handleCheckboxChanged = (e: SyntheticEvent) => {
    if (!formRef.current) return;
    const targetInput = e.target as HTMLInputElement;
    const data = new FormData(formRef.current);
    const selectedCount = data.getAll('select-item').length;

    if (targetInput.classList.contains('select-all')) {
      const allChecked = targetInput.checked;
      checkboxRefs.forEach((inputElem) => {
        inputElem.current!.checked = allChecked;
      })
    } else {
      const allChecked = (selectedCount === cartItems.length);
      formRef.current.querySelector<HTMLInputElement>('.select-all')!.checked = allChecked;
    }
  }

  return (
    <form ref={formRef} onChange={handleCheckboxChanged}>
      <label>
        <input className="select-all" name="select-all" type="checkbox" />
        전체선택
      </label>
      <ul className="cart">
        {cartItems.map((item, idx) => 
          <CartItem {...item} key={item.id} ref={checkboxRefs[idx]} />
        )}
      </ul>
    </form>
  )
}

export default CartList;