/** @format */

import { ThemeProvider } from "styled-components";
import { MapPin, ShoppingCart } from "phosphor-react";

import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";

import {
  CartContainer,
  HeaderActionsContainer,
  HeaderContainer,
  LocationContainer,
} from "./homeStyle";

import logo from "./assets/logo.svg";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HeaderContainer>
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
      </HeaderContainer>

      <GlobalStyle />
    </ThemeProvider>
  );
}
