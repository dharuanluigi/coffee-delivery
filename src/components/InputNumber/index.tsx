/** @format */

import { Minus, Plus } from "phosphor-react";
import {
  InputContainer,
  InputNumberButton,
  InputNumberContent,
} from "./styles";

export function InputNumber() {
  return (
    <InputContainer>
      <InputNumberButton>
        <Minus size={14} weight="bold" />
      </InputNumberButton>
      <InputNumberContent />
      <InputNumberButton>
        <Plus size={14} weight="bold" />
      </InputNumberButton>
    </InputContainer>
  );
}
