/** @format */

import styled from "styled-components";

export const InputCustomSize = {
  xs: "3.75rem",
  sm: "12.5rem",
  md: "17.25rem",
  lg: "21.75rem",
  max: "100%",
} as const;

interface InputTextProps {
  isOptional: boolean;
  customSize: keyof typeof InputCustomSize;
}

export const InputTextContainer = styled.div<InputTextProps>`
  width: ${(props) =>
    InputCustomSize[props.customSize]}; // it should be changeble
  display: flex;
  align-items: center;
  position: relative;

  &::after {
    content: ${(props) => (props.isOptional ? "'Opcional'" : "''")};
    font-size: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme["base-label"]};

    position: absolute;
    right: 10px;
  }
`;

export const InputTextComponent = styled.input`
  width: 100%;
  height: 2.625rem;
  padding: 0.75rem;
  border-radius: 4px;

  font-size: 0.875rem;

  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};

  &:focus {
    outline: transparent;
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
`;
