/** @format */

import { Minus, Plus } from "phosphor-react";
import { InputHTMLAttributes, useState } from "react";
import {
  InputContainer,
  InputNumberButton,
  InputNumberContent,
} from "./styles";

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputNumber({ ...rest }: InputNumberProps) {
  const [quantity, setQuantity] = useState(0);

  function handleMinus() {
    if (quantity > 0) {
      setQuantity((state) => state - 1);
    }
  }

  function handlePlus() {
    if (quantity < 10) {
      setQuantity((state) => state + 1);
    }
  }

  return (
    <InputContainer>
      <InputNumberButton onClick={handleMinus}>
        <Minus size={14} weight="bold" />
      </InputNumberButton>
      <InputNumberContent {...rest} value={quantity} type="number" readOnly />
      <InputNumberButton>
        <Plus size={14} weight="bold" onClick={handlePlus} />
      </InputNumberButton>
    </InputContainer>
  );
}
