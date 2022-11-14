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
`;

export const CardPriceForm = styled.form`
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

export const TextContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  h1 {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
  }

  p {
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const CoffeeTag = styled.span`
  padding: 4px 8px;
  border-radius: 100px;

  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const ViewPrice = styled.div`
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

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }

  span + label {
    font-size: 1.5rem;
    font-family: "Baloo 2";
    font-weight: 800;
    color: ${(props) => props.theme["base-text"]};
  }
`;
