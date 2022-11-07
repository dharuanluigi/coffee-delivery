/** @format */

import styled from "styled-components";

export const CardCartContainer = styled.div`
  width: 23rem;
  height: 5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px 4px;

  background: ${(props) => props.theme["base-card"]};

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const ActionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
