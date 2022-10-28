/** @format */

import { CardPriceForm, CoffeeCardContainer } from "./styles";

import traditional_express_image from "../../assets/coffees/traditional_express.png";
import { ShoppingCartSimple } from "phosphor-react";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img
        src={traditional_express_image}
        alt="Uma chícara de café branca com café preto dentro"
      />
      <span>Tradicional</span>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <CardPriceForm>
        <div>
          <span>R$ </span>
          <span>9,90</span>
        </div>
        <div>
          <input type="number" name="coffeeQuantity" id="coffeeQuantity" />
          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </CardPriceForm>
    </CoffeeCardContainer>
  );
}
