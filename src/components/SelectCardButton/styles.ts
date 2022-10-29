/** @format */

import styled from "styled-components";

export const SelectCardContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 6px;
  border: none;

  font-size: 0.75rem;

  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};

  span {
    color: ${(props) => props.theme["brand-purple"]};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};
    cursor: pointer;

    transition: background-color 0.2s;
  }
`;
