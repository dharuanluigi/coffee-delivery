/** @format */

import { MapPin, ShoppingCart } from "phosphor-react";
import {
  CartContainer,
  HeaderActionsContainer,
  HeaderContainer,
  HeaderContent,
  LocationContainer,
} from "./styles";

import logo from "../../assets/logo.svg";

export function Header() {
  return (
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
  );
}
