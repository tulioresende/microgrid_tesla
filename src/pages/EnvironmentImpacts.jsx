import React from "react";
import styled from "styled-components";
import CardStatusHorizontal from "../components/cards/CardStatusHorizontal";

import PageStructure from "../components/pageStructure/PageStructure";

const GeneralContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EnvironmentImpacts = () => {
  const renderFunction = () => {
    return (
      <GeneralContainer>
        <CardStatusHorizontal
          title={`Quantidade de árvores plantadas:`}
          value={2170}
        ></CardStatusHorizontal>
        <CardStatusHorizontal
          title={`CO2 salvo::`}
          value={`1280 kg`}
        ></CardStatusHorizontal>
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
