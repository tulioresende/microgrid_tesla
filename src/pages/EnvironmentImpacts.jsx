import React from "react";
import styled from "styled-components";
import CardStatusHorizontal from "../components/cards/CardStatusHorizontal";

import PageStructure from "../components/pageStructure/PageStructure";
import svg from "../assets/svg";
import Colors from "../globalVariables/Colors";

const { Co2Save, Trees } = svg;

const GeneralContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EnvironmentImpacts = () => {
  const renderFunction = () => {
    return (
      <GeneralContainer>
        <CardStatusHorizontal
          title={`Quantidade de árvores plantadas:`}
          value={2170}
        >
          <Trees color={Colors.green} />
        </CardStatusHorizontal>
        <CardStatusHorizontal title={`CO2 salvo:`} value={`1280 kg`}>
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
