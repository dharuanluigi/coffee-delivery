/** @format */

import { Trash } from "phosphor-react";
import { RemoveCoffeeButtonContainer } from "./styles";

export function RemoveCoffeeButton() {
  return (
    <RemoveCoffeeButtonContainer>
      <Trash size={16} weight="bold" />
      <span>REMOVER</span>
    </RemoveCoffeeButtonContainer>
  );
}
