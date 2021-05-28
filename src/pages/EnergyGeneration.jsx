import React, { useEffect, useState } from "react";
import styled from "styled-components";

import BarChart from "../components/charts/BarChart";
import PageStructure from "../components/pageStructure/PageStructure";
import { generateOneBarDataMock } from "../utils/functions/mocks";

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
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(false);
    };
    getData();
  }, [trigger]);

  const data = generateOneBarDataMock({
    label: "energia gerada",
    xLabel: `01/11`,
    yMaxValue: 1000,
    length: 12,
  });

  const dataDay = generateOneBarDataMock({
    label: "energia gerada",
    xLabel: `1am`,
    yMaxValue: 200,
    length: 24,
  });

  const dataMonth = generateOneBarDataMock({
    label: "energia gerada",
    xLabel: `1/3`,
    yMaxValue: 10,
    length: 31,
  });

  const graphHeight = 240;
  const graphWidth = 1000;

  const renderFunction = () => {
    return (
      <GeneralContainer>
        {isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          <Container>
            <SubContainer>
              <BarChart
                width={graphWidth / 2}
                height={graphHeight}
                dataVector={data}
              >
                <GraphTitle>Energia Gerada (kWh) - ano</GraphTitle>
              </BarChart>
              <BarChart
                width={graphWidth / 2}
                height={graphHeight}
                dataVector={dataDay}
              >
                <GraphTitle>Energia Gerada (kWh) - dia</GraphTitle>
              </BarChart>
            </SubContainer>
            <SubContainer>
              <BarChart
                width={graphWidth}
                height={graphHeight}
                dataVector={dataMonth}
              >
                <GraphTitle>Energia Gerada (kWh) - mês</GraphTitle>
              </BarChart>
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
