/** @format */

import {
  CardPriceForm,
  CoffeeCardContainer,
  CoffeeTag,
  ViewPrice,
  TagsContainer,
  TextContentContainer,
} from "./styles";

import traditional_express_image from "../../assets/coffees/traditional_express.png";
import { ShoppingCartSimple } from "phosphor-react";
import { InputNumber } from "../InputNumber";

export interface CoffeeModel {
  id: string;
  title: string;
  details: string;
  priceInCents: number;
  tags: Tag[];
}

interface Tag {
  id: string;
  title: string;
}

interface CoffeeProps {
  coffee: CoffeeModel;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const filledPriceInDollar = coffee.priceInCents / 100;
  const filledPriceInBrasilianFormat = filledPriceInDollar
    .toFixed(2)
    .replace(".", ",");

  return (
    <CoffeeCardContainer>
      <img
        src={traditional_express_image}
        alt="Uma xícara de café branca com café preto dentro"
      />
      <CardPriceForm>
        <TagsContainer>
          {coffee.tags &&
            coffee.tags.map((tag) => {
              return <CoffeeTag key={tag.id}>{tag.title}</CoffeeTag>;
            })}
        </TagsContainer>

        <TextContentContainer>
          <h1>{coffee.title}</h1>
          <p>{coffee.details}</p>
        </TextContentContainer>

        <ViewPrice>
          <span>R$ </span>
          <label htmlFor="price">{filledPriceInBrasilianFormat}</label>
          <InputNumber />
          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </ViewPrice>
      </CardPriceForm>
    </CoffeeCardContainer>
  );
}
