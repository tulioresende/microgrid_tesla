import React, { useEffect, useState } from "react";
import styled from "styled-components";

import BarChart from "../components/charts/BarChart";
import PageStructure from "../components/pageStructure/PageStructure";
import getBatteriesCurrentData from "../firebase/services/batteries/Batteries";
import { sleep } from "../utils/functions/General";

const GraphTitle = styled.text`
  font-size: 36px;
`;

const EnergyGeneration = () => {
  const [batteriesData, setBatteriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const list = await getBatteriesCurrentData();
      setBatteriesData(list);
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

  const renderFunction = () => {
    configTrigger();
    return (
      <>
        {isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          <>
            <BarChart width={200} height={200}>
              <GraphTitle>texto</GraphTitle>
            </BarChart>
            <BarChart width={200} height={200} />
            <BarChart width={200} height={200} />
          </>
        )}
      </>
    );
  };
  return (
    <PageStructure renderFunction={renderFunction} pageTitle={"Baterias"} />
  );
};

export default EnergyGeneration;
