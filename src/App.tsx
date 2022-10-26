/** @format */

import { ThemeProvider } from "styled-components";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";

import {
  BenefitsContainer,
  BodyContainer,
  BodyContent,
  ContainerTitle,
  IntroductionBody,
  IntroductionContainer,
  TextContent,
  TextContentContainer,
} from "./homeStyle";

import mainCoffeeImage from "./assets/mainCoffeeImage.svg";

import { Header } from "./components/Header";
import { CoffeeCard } from "./components/CoffeeCard";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <IntroductionBody>
        <IntroductionContainer>
          <TextContentContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
            <BenefitsContainer>
              <TextContent backgroundColor="yellowDark">
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>
                Compra simples e segura
              </TextContent>

              <TextContent backgroundColor="baseText">
                <span>
                  <Package size={16} weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </TextContent>

              <TextContent backgroundColor="brandYellow">
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                Entrega rápida e rastreada
              </TextContent>

              <TextContent backgroundColor="brandPurple">
                <span>
                  <Coffee size={16} weight="fill" />
                </span>
                O café chega fresquinho até você
              </TextContent>
            </BenefitsContainer>
          </TextContentContainer>
          <img src={mainCoffeeImage} alt="" />
        </IntroductionContainer>
      </IntroductionBody>

      <BodyContainer>
        <ContainerTitle>
          <h1>Nossos cafés</h1>
        </ContainerTitle>

        <BodyContent>
          <CoffeeCard key={1} />
          <CoffeeCard key={2} />
          <CoffeeCard key={3} />
          <CoffeeCard key={4} />
          <CoffeeCard key={5} />
          <CoffeeCard key={6} />
        </BodyContent>
      </BodyContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}
