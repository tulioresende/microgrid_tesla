import React, { useEffect, useState } from "react";
import styled from "styled-components";

import PageStructure from "../components/pageStructure/PageStructure";
import {
  getMainGridLastRecordsDataPhaseA,
  getMainGridLastRecordsDataPhaseB,
  getMainGridLastRecordsDataPhaseC,
} from "../firebase/services/mainGrid/MainGrid";
import { LineChart } from "../components/charts";
import { sleep } from "../utils/functions/General";
import Grid from "../classes/Grid";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 16px;
`;

const PhaseTitle = styled.text`
  font-size: 24px;
  margin-right: 24px;
`;

const _Grid = new Grid();

const MainGrid = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [gridVoltageData, setGridVoltageData] = useState([]);
  const [gridCurrentData, setGridCurrentData] = useState([]);
  const [gridActivePowerData, setGridActivePowerData] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const recordsPhaseA = await getMainGridLastRecordsDataPhaseA(10);
      const recordsPhaseB = await getMainGridLastRecordsDataPhaseB(10);
      const recordsPhaseC = await getMainGridLastRecordsDataPhaseC(10);

      const graphVoltageArray = {
        phaseA: _Grid.getVoltageChartData(recordsPhaseA),
        phaseB: _Grid.getVoltageChartData(recordsPhaseB),
        phaseC: _Grid.getVoltageChartData(recordsPhaseC),
      };
      const graphCurrentArray = {
        phaseA: _Grid.getCurrentChartData(recordsPhaseA),
        phaseB: _Grid.getCurrentChartData(recordsPhaseB),
        phaseC: _Grid.getCurrentChartData(recordsPhaseC),
      };
      const graphActivePowerArray = {
        phaseA: _Grid.getActivePowerChartData(recordsPhaseA),
        phaseB: _Grid.getActivePowerChartData(recordsPhaseB),
        phaseC: _Grid.getActivePowerChartData(recordsPhaseC),
      };

      setGridCurrentData(graphCurrentArray);
      setGridVoltageData(graphVoltageArray);
      setGridActivePowerData(graphActivePowerArray);
      setIsLoading(false);
    };
    getData();
  }, [trigger]);

  const configTrigger = async () => {
    while (true) {
      await sleep(60);
      setTrigger(!trigger);
    }
  };

  const printPhaseName = (phase) => {
    switch (phase) {
      case "phaseA":
        return "Fase A";
      case "phaseB":
        return "Fase B";
      case "phaseC":
        return "Fase C";
      default:
        return "desconhecido";
    }
  };

  const printGraph = (phase) => {
    const graphHeight = 150;
    const graphWidth = 300;

    return (
      <GraphContainer>
        <PhaseTitle>{printPhaseName(phase)}</PhaseTitle>
        <LineChart
          width={graphWidth}
          height={graphHeight}
          dataVector={gridVoltageData[phase]}
          styles={{ marginLeft: 16, marginRight: 16 }}
        >
          <text>Tensão (V)</text>
        </LineChart>
        <LineChart
          width={graphWidth}
          height={graphHeight}
          dataVector={gridCurrentData[phase]}
          styles={{ marginLeft: 16, marginRight: 16 }}
        >
          <text>Corrente (A)</text>
        </LineChart>
        <LineChart
          width={graphWidth}
          height={graphHeight}
          dataVector={gridActivePowerData[phase]}
          styles={{ marginLeft: 16, marginRight: 16 }}
        >
          <text>Potência Ativa (W)</text>
        </LineChart>
      </GraphContainer>
    );
  };

  const renderFunction = () => {
    configTrigger();
    return (
      <>
        {isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          <Container>
            {printGraph(`phaseA`)}
            {printGraph(`phaseB`)}
            {printGraph(`phaseC`)}
          </Container>
        )}
      </>
    );
  };
  return (
    <PageStructure
      renderFunction={renderFunction}
      pageTitle={"Rede Principal"}
    />
  );
};

export default MainGrid;
