/** @format */

import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px;
  padding: 1.25rem;

  background: ${(props) => props.theme["base-card"]};

  img {
    max-width: 7.5rem;
    max-height: 7.5rem;
    margin-top: -40px;
    margin-bottom: 0.75rem;
  }

  h1 {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
    margin-bottom: 2rem;
  }
`;

export const CoffeeTag = styled.span`
  padding: 4px 8px;
  border-radius: 100px;
  margin-bottom: 1rem;

  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const ViewPrice = styled.div`
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }

  span + span {
    font-size: 1.5rem;
    font-family: "Baloo 2";
    font-weight: 800;
  }
`;

export const CardPriceForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  div + div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    button {
      width: 2.3rem;
      height: 2.3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      border-radius: 8px;

      background: ${(props) => props.theme["purple-dark"]};
      color: ${(props) => props.theme["base-card"]};
    }

    button:hover {
      cursor: pointer;
    }
  }
`;
