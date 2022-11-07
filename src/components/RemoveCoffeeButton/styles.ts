/** @format */

import styled from "styled-components";

export const RemoveCoffeeButtonContainer = styled.button`
  width: 5.6rem;
  height: 2rem;
  border-radius: 6px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border: none;

  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["brand-purple"]};

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["purple-dark"]};
    cursor: pointer;
  }
`;
