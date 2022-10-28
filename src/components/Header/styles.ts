/** @format */

import styled from "styled-components";

export const HeaderContainer = styled.nav`
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1125px;

  img {
    cursor: pointer;
  }
`;

export const HeaderActionsContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const LocationContainer = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 0.875rem;
  border-radius: 6px;

  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};

  span {
    color: ${(props) => props.theme["brand-purple"]};
  }
`;

export const CartContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  position: relative;
  background: ${(props) => props.theme["yellow-light"]};

  a {
    color: ${(props) => props.theme["yellow-dark"]};
    padding: 8px;
  }
`;

export const TotalItems = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  position: absolute;
  right: -8px;
  top: -8px;

  font-weight: 700;
  font-size: 0.75rem;

  background: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme.white};
`;
