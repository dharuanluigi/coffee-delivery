/** @format */

import styled from "styled-components";

import mainBackgrounImage from "./assets/background.svg";

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
  max-width: 1120px;
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

export const CartContainer = styled.span`
  padding: 8px;
  border-radius: 6px;

  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const IntroductionBody = styled.div`
  background: url(${mainBackgrounImage}) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const IntroductionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  max-width: 1120px;
  margin: 6.75rem 0 6.75rem 0;
`;

export const TextContentContainer = styled.div`
  max-width: 80%;
  h1 {
    font-size: 3rem;
    font-family: "Baloo 2";
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 4.125rem;
  }
`;

export const BenefitsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.5rem;
`;

const BACKGROUND_COLORS = {
  brandYellow: "brand-yellow",
  yellowDark: "yellow-dark",
  baseText: "base-text",
  brandPurple: "brand-purple",
} as const;

interface BenefitsProps {
  backgroundColor: keyof typeof BACKGROUND_COLORS;
}

export const TextContent = styled.p<BenefitsProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;

    color: ${(props) =>
      props.backgroundColor
        ? props.theme.background
        : props.theme["base-text"]};

    background: ${(props) =>
      props.theme[BACKGROUND_COLORS[props.backgroundColor]]};
  }
`;
