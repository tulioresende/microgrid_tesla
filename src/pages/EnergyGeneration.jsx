import React, { useEffect, useState } from "react";
import styled from "styled-components";

import BarChart from "../components/charts/BarChart";
import PageStructure from "../components/pageStructure/PageStructure";
import getEnergyGenerationDataDaily from "../firebase/services/energyGeneration";
import { generateArrayToChartBar } from "../utils/functions/Array";
import { generateOneGroupDataMock } from "../utils/functions/mocks";

const GraphTitle = styled.text`
  font-size: 24px;
`;

const GeneralContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-betwenn;
  margin-bottom: 32px;
`;

const EnergyGeneration = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [energyDailyData, setEnergyDailyData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const list = await getEnergyGenerationDataDaily("20210604");
      const arrayDaily = generateArrayToChartBar(
        list,
        "energia (kWh)",
        `hour`,
        `total`
      );
      setEnergyDailyData(arrayDaily);
      setIsLoading(false);
    };
    getData();
  }, []);

  const data = [
    generateOneGroupDataMock({
      label: "energia gerada",
      xLabel: `01/11`,
      yMaxValue: 1000,
      length: 12,
    }),
  ];

  const dataMonth = [
    generateOneGroupDataMock({
      label: "energia gerada",
      xLabel: `1/3`,
      yMaxValue: 10,
      length: 31,
    }),
  ];

  const graphHeight = 240;
  const graphWidth = 1000;

  const renderGraph = (title, dataVector, width) => (
    <BarChart width={width} height={graphHeight} dataVector={dataVector}>
      <GraphTitle>{title}</GraphTitle>
    </BarChart>
  );
  const renderFunction = () => {
    return (
      <GeneralContainer>
        {isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          <Container>
            <SubContainer>
              {renderGraph(`Energia Gerada (kWh) - ano`, data, graphWidth / 2)}
              {renderGraph(
                `Energia Gerada (kWh) - dia`,
                energyDailyData,
                graphWidth / 2
              )}
            </SubContainer>
            <SubContainer>
              {renderGraph(`Energia Gerada (kWh) - mês`, dataMonth, graphWidth)}
            </SubContainer>
          </Container>
        )}
      </GeneralContainer>
    );
  };
  return (
    <PageStructure
      renderFunction={renderFunction}
      pageTitle={"Energia Gerada no Período"}
    />
  );
};

export default EnergyGeneration;
