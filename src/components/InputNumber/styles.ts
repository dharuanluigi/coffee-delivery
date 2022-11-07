/** @format */

import styled from "styled-components";

export const InputContainer = styled.div`
  width: 4.5rem;
  height: 2.3rem;
  border-radius: 6px;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["base-button"]};
`;

export const InputNumberContent = styled.input.attrs({ type: "number" })`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }
  outline: none;
  border: none;
  width: 100%;
  text-align: center;

  background: transparent;
  color: ${(props) => props.theme["base-title"]};
`;

export const InputNumberButton = styled.span`
  color: ${(props) => props.theme["brand-purple"]};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme["purple-dark"]};

    transition: color 0.5s;
  }
`;
