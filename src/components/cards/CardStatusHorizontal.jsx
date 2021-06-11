import React, { useState } from "react";
import styled from "styled-components";
import {
  getEnergyGenerationInitDate,
  getEnergyGenerationTotal,
} from "../../firebase/services/energyGeneration";
import { getDaysCountBetweenDates } from "../../utils/functions/Date";
import calcTreeNumbers, {
  calcCO2Saving,
} from "../../utils/functions/Environment";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 150px;
  border-radius: 16px;
  padding: 6px 12px 12px 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 12px;
`;

export const Title = styled.text`
  display: flex;
  font-size: 28px;
  text-align: center;
  margin-bottom: 16px;
`;

export const ValueText = styled.text`
  display: flex;
  font-size: 24px;
  align-self: center;
  text-align: center;
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CardStatusHorizontal = ({ title, value, children }) => {
  return (
    <Container>
      {children}
      <SubContainer>
        <Title>{title}</Title>
        <ValueText>{value}</ValueText>
      </SubContainer>
    </Container>
  );
};

export default CardStatusHorizontal;
