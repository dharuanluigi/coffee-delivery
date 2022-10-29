/** @format */

import { CreditCard } from "phosphor-react";
import { SelectCardContainer } from "./styles";

export function SelectCardButton() {
  return (
    <SelectCardContainer>
      <span>
        <CreditCard size={16} />
      </span>
      CARTÃO DE CRÉDITO
    </SelectCardContainer>
  );
}
