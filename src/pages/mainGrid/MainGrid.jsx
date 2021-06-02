import React, { useEffect, useState } from "react";
import styled from "styled-components";

import PageStructure from "../../components/pageStructure/PageStructure";
import getMainGridCurrentData from "../../firebase/services/mainGrid/MainGrid";
import { LineChart } from "../../components/charts";
import { generateOneGroupDataMock } from "../../utils/functions/mocks";
import { sleep } from "../../utils/functions/General";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
`;

const MainGrid = () => {
  const [mainGridData, setMainGridData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const list = await getMainGridCurrentData();
      setMainGridData(list);
      setIsLoading(false);
    };
    getData();
  }, [trigger]);

  const configTrigger = async () => {
    while (true) {
      await sleep(5);
      setTrigger(!trigger);
    }
  };

  const currentData = [
    generateOneGroupDataMock({
      label: "corrente",
      xLabel: ``,
      yMaxValue: 10,
      length: 12,
    }),
  ];

  const voltageData = [
    generateOneGroupDataMock({
      label: "Tensão",
      xLabel: ``,
      yMaxValue: 100,
      length: 12,
    }),
  ];

  const powerData = [
    generateOneGroupDataMock({
      label: "Potencia",
      xLabel: ``,
      yMaxValue: 1000,
      length: 12,
    }),
  ];

  const renderFunction = () => {
    configTrigger();
    return (
      <>
        {isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          <Container>
            <LineChart width={300} height={300} dataVector={voltageData}>
              <text>Tensão (V)</text>
            </LineChart>
            <LineChart width={300} height={300} dataVector={currentData}>
              <text>Corrente (A)</text>
            </LineChart>
            <LineChart width={300} height={300} dataVector={powerData}>
              <text>Potência (kW)</text>
            </LineChart>
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
