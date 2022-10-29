/** @format */

import { CreditCard } from "phosphor-react";
import { CardButton, SelectCardContainer } from "./styles";

interface SelectCardProps {
  id: string;
}

export function SelectCardButton({ id }: SelectCardProps) {
  return (
    <SelectCardContainer>
      <input type="radio" name="method" id={id} />
      <CardButton htmlFor={id}>
        <span>
          <CreditCard size={16} />
        </span>
        CARTÃO DE CRÉDITO
      </CardButton>
    </SelectCardContainer>
  );
}
