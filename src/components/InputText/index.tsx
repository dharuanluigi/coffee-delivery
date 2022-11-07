/** @format */

import { InputHTMLAttributes } from "react";
import {
  InputCustomSize,
  InputTextComponent,
  InputTextContainer,
} from "./styles";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
  customSize?: keyof typeof InputCustomSize;
}

export function InputText({
  isOptional = false,
  customSize = "sm",
  ...rest
}: InputTextProps) {
  return (
    <InputTextContainer isOptional={isOptional} customSize={customSize}>
      <InputTextComponent {...rest} type="text" />
    </InputTextContainer>
  );
}
