import { createRef, SyntheticEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { TypeCart } from "../../graphql/cart";
import { checkedCartState } from "../../recoils/cart";
import WillPay from "../willPay";
import CartItem from "./item";

const CartList = ({ cartItems }: {cartItems: TypeCart[]}) => {

  const [checkedCartData, setCheckedCartData] = useRecoilState(checkedCartState);
  const formRef = useRef<HTMLFormElement>(null);
  const checkboxRefs = cartItems.map(() => createRef<HTMLInputElement>());
  const [formData, setFormData] = useState<FormData>();

  const setAllCheckedFromItems = () => {
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const selectedCount = data.getAll('select-item').length;
    const allChecked = (selectedCount === cartItems.length);
    formRef.current.querySelector<HTMLInputElement>('.select-all')!.checked = allChecked;
  }

  const setItemscheckedFromAll = (targetInput: HTMLInputElement) => {
    const allChecked = targetInput.checked;
    checkboxRefs.forEach((inputElem) => {
      inputElem.current!.checked = allChecked;
    })
  }

  const handleCheckboxChanged = (e?: SyntheticEvent) => {
    if (!formRef.current) return;
    const targetInput = e?.target as HTMLInputElement;

    if (targetInput && targetInput.classList.contains('select-all')) {
      setItemscheckedFromAll(targetInput);
    } else {
      setAllCheckedFromItems();
    }
    
    const data = new FormData(formRef.current);
    setFormData(data);
  }

  useEffect(() => {
    const checkedItems = checkboxRefs.reduce<TypeCart[]>((res, ref, idx) => {
      if (ref.current!.checked) res.push(cartItems[idx]);
      return res;
    }, []);
    setCheckedCartData(checkedItems);
  }, [cartItems, formData]);

  useEffect(() => {
    checkedCartData.forEach(item => {
      const itemRef = checkboxRefs.find(ref => ref.current!.dataset.id === item.id);
      if (itemRef) itemRef.current!.checked = true;
    })
    setAllCheckedFromItems();
  }, []);

  return (
    <div>
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
      <WillPay />
    </div>
  )
}

export default CartList;