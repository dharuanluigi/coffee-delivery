/** @format */

import { ThemeProvider } from "styled-components";
import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";

import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";

import {
  BenefitsContainer,
  CartContainer,
  HeaderActionsContainer,
  HeaderContainer,
  HeaderContent,
  IntroductionBody,
  IntroductionContainer,
  LocationContainer,
  TextContent,
  TextContentContainer,
} from "./homeStyle";

import logo from "./assets/logo.svg";
import mainCoffeeImage from "./assets/mainCoffeeImage.svg";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HeaderContainer>
        <HeaderContent>
          <img src={logo} alt="" />
          <HeaderActionsContainer>
            <LocationContainer>
              <span>
                <MapPin size={22} weight="fill" />
              </span>
              Porto Alegre, RS
            </LocationContainer>

            <CartContainer>
              <ShoppingCart size={22} weight="fill" />
            </CartContainer>
          </HeaderActionsContainer>
        </HeaderContent>
      </HeaderContainer>

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

      <GlobalStyle />
    </ThemeProvider>
  );
}
