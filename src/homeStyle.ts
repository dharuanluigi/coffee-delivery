/** @format */

import styled from "styled-components";

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 6.5rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
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
    color: ${(props) => props.theme["purple"]};
  }
`;

export const CartContainer = styled.span`
  padding: 8px;
  border-radius: 6px;

  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
`;
