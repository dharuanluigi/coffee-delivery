/** @format */

import styled from "styled-components";

export const ConfirmedOrderContainer = styled.main`
  max-width: 1125px;
  display: flex;
  gap: 6.375rem;
  margin: 5rem auto 28rem auto;
`;

export const ConfirmedOrderHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;

    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const DeliveryInformationsContainer = styled.div`
  border-radius: 6px 36px;
  padding: 1px;

  background: linear-gradient(
    to right,
    ${(props) => props.theme["brand-yellow"]},
    ${(props) => props.theme["brand-purple"]}
  );
`;

export const DeliveryInformationsContent = styled.div`
  border-radius: 6px 36px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${(props) => props.theme.background};
`;

export const DetailsDeliveryContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const BACKGROUND_COLORS = {
  brandYellow: "brand-yellow",
  yellowDark: "yellow-dark",
  brandPurple: "brand-purple",
} as const;

interface BenefitsProps {
  backgroundColor: keyof typeof BACKGROUND_COLORS;
}

export const BulletIndicator = styled.span<BenefitsProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;

  color: ${(props) =>
    props.backgroundColor ? props.theme.background : props.theme["base-text"]};

  background: ${(props) =>
    props.theme[BACKGROUND_COLORS[props.backgroundColor]]};
`;
