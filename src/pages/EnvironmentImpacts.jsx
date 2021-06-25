import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardStatusHorizontal from "../components/cards/CardStatusHorizontal";

import PageStructure from "../components/pageStructure/PageStructure";
import svg from "../assets/svg";
import Colors from "../globalVariables/Colors";
import {
  getEnergyGenerationInitDate,
  getEnergyGenerationTotal,
} from "../firebase/services/energyGeneration";
import { getDaysCountBetweenDates } from "../utils/functions/Date";
import calcTreeNumbers, { calcCO2Saving } from "../utils/functions/Environment";

const { Co2Save, Trees } = svg;

const GeneralContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EnvironmentImpacts = () => {
  const [co2TotalSaved_kg, setCo2TotalSaved_kg] = useState(0);
  const [treeNumberEquivalent, setTreeNumberEquivalent] = useState(0);

  useEffect(() => {
    const calcDays = async () => {
      const initDate = await getEnergyGenerationInitDate();
      const totalEnergyGenerated = await getEnergyGenerationTotal();
      alert(totalEnergyGenerated);
      const totalDaysOfGeneration = getDaysCountBetweenDates(
        initDate,
        new Date()
      );
      const energyGeneratedPerDay_kWh =
        totalEnergyGenerated / totalDaysOfGeneration;

      setCo2TotalSaved_kg(calcCO2Saving(totalEnergyGenerated));

      const co2Saved = calcCO2Saving(energyGeneratedPerDay_kWh);
      const treeNumber = calcTreeNumbers(co2Saved);
      setTreeNumberEquivalent(treeNumber);
    };

    calcDays();
  }, []);

  const renderFunction = () => {
    return (
      <GeneralContainer>
        <CardStatusHorizontal
          title={`Equivalência de árvores plantadas:`}
          value={treeNumberEquivalent}
        >
          <Trees color={Colors.green} />
        </CardStatusHorizontal>
        <CardStatusHorizontal
          title={`CO2 salvo:`}
          value={`${co2TotalSaved_kg} kg`}
        >
          <Co2Save color={Colors.green} />
        </CardStatusHorizontal>
      </GeneralContainer>
    );
  };
  return (
    <PageStructure
      renderFunction={renderFunction}
      pageTitle={"Meio Ambiente"}
    />
  );
};

export default EnvironmentImpacts;
