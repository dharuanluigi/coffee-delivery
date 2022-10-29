/** @format */

import {
  ActionButtonsContainer,
  ActionSection,
  CardCartContainer,
} from "./styles";

import coffeeImage from "../../assets/coffees/traditional_express.png";
import { InputNumber } from "../InputNumber";
import { RemoveCoffeeButton } from "../RemoveCoffeeButton";

export function CardCart() {
  return (
    <CardCartContainer>
      <img src={coffeeImage} alt="" />
      <ActionSection>
        <span>Expresso Tradicional</span>
        <ActionButtonsContainer>
          <InputNumber />
          <RemoveCoffeeButton />
        </ActionButtonsContainer>
      </ActionSection>
      <span>R$ 9,90</span>
    </CardCartContainer>
  );
}
