/** @format */

import {
  CardPriceForm,
  CoffeeCardContainer,
  CoffeeTag,
  ViewPrice,
} from "./styles";

import traditional_express_image from "../../assets/coffees/traditional_express.png";
import { ShoppingCartSimple } from "phosphor-react";
import { InputNumber } from "../InputNumber";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img
        src={traditional_express_image}
        alt="Uma chícara de café branca com café preto dentro"
      />
      <CoffeeTag>Tradicional</CoffeeTag>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <CardPriceForm>
        <ViewPrice>
          <span>R$ </span>
          <span>9,90</span>
        </ViewPrice>
        <div>
          <InputNumber />
          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </CardPriceForm>
    </CoffeeCardContainer>
  );
}
