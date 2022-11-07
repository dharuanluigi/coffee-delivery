/** @format */

import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import {
  InputContainer,
  InputNumberButton,
  InputNumberContent,
} from "./styles";

export function InputNumber() {
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
      <InputNumberContent value={quantity} readOnly />
      <InputNumberButton>
        <Plus size={14} weight="bold" onClick={handlePlus} />
      </InputNumberButton>
    </InputContainer>
  );
}
