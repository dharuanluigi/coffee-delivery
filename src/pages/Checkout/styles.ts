/** @format */

import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 1125px;
  margin: 2.5rem auto 15rem auto;
`;

export const FormCompleteOrder = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`;

export const DataSection = styled.section`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;

  h1 {
    font-size: 1.125rem;
    font-family: "Baloo 2";
    font-weight: 700;
  }
`;

const BaseCard = styled.section`
  border-radius: 6px;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
`;

export const AddressSection = styled(BaseCard)`
  height: 23.25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AddressSectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  color: ${(props) => props.theme["yellow-dark"]};

  div {
    line-height: 1.3;

    h1 {
      font-family: "Roboto";
      font-weight: 400;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const PaymentSection = styled(BaseCard)`
  height: 12.9375rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PaymentSectionHeader = styled(AddressSectionHeader)`
  color: ${(props) => props.theme["brand-purple"]};
`;

export const ReviewOrderSection = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;

  h1 {
    font-size: 1.125rem;
    font-family: "Baloo 2";
    font-weight: 700;
  }
`;

export const ReviewOrderSectionContent = styled.div`
  width: 28rem;
  height: 31.125rem;
  padding: 2.5rem;
  border-radius: 6px 44px;

  background: ${(props) => props.theme["base-card"]};
`;

export const ReviewItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const CardItem = styled.li`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
`;

export const ReviewTotalPrice = styled.table`
  width: 100%;

  tbody {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    tr {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const FinishOrderButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  height: 2.875rem;
  border: none;
  border-radius: 6px;

  font-weight: 700;
  font-size: 0.875rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme["brand-yellow"]};

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
    cursor: pointer;

    transition: background-color 0.3s ease;
  }
`;
