/** @format */

import { MapPin, ShoppingCart } from "phosphor-react";
import {
  CartContainer,
  HeaderActionsContainer,
  HeaderContainer,
  HeaderContent,
  LocationContainer,
  TotalItems,
} from "./styles";

import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Header() {
  const { totalItensInCart } = useContext(CoffeeContext);
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" title="Página inicial">
          <img src={logo} alt="" />
        </NavLink>
        <HeaderActionsContainer>
          <LocationContainer>
            <span>
              <MapPin size={22} weight="fill" />
            </span>
            Porto Alegre, RS
          </LocationContainer>

          <CartContainer>
            <TotalItems>{totalItensInCart}</TotalItems>
            <NavLink to="/checkout" title="Conclusão de pedido">
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
          </CartContainer>
        </HeaderActionsContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
