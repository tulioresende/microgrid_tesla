import React, { useEffect, useState } from "react";
import styled from "styled-components";

import BarChart from "../components/charts/BarChart";
import PageStructure from "../components/pageStructure/PageStructure";
import {
  getEnergyGenerationDataDaily,
  getEnergyGenerationDataMonthly,
  getEnergyGenerationDataYearly,
} from "../firebase/services/energyGeneration";
import { generateArrayToChartBar } from "../utils/functions/Array";
import { getDateFormatted } from "../utils/functions/Date";

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
  const [energyMonthlyData, setEnergyMonthlyData] = useState([]);
  const [energyYearlyData, setEnergyYearlyData] = useState([]);

  const graphHeight = 240;
  const graphWidth = 1000;

  const todayDate = new Date();
  const currentMonth = todayDate.getMonth() + 1;
  const currentYear = todayDate.getFullYear();
  const currentDate = getDateFormatted(
    currentYear,
    currentMonth,
    todayDate.getDate()
  );

  const generateArrayToChart = (array) => {
    const arrayRet = generateArrayToChartBar(
      array,
      "energia (kWh)",
      `group`,
      `total`
    );
    return arrayRet;
  };

  useEffect(() => {
    const getData = async () => {
      alert(currentDate);
      const listDaily = await getEnergyGenerationDataDaily(currentDate);
      const arrayDaily = generateArrayToChart(listDaily);

      const listMonthly = await getEnergyGenerationDataMonthly(currentMonth);
      const arrayMonthly = generateArrayToChart(listMonthly);

      const listYearly = await getEnergyGenerationDataYearly(currentYear);
      const arrayYearly = generateArrayToChart(listYearly);

      setEnergyDailyData(arrayDaily);
      setEnergyMonthlyData(arrayMonthly);
      setEnergyYearlyData(arrayYearly);
      setIsLoading(false);
    };
    getData();
  }, []);

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
              {renderGraph(
                `Energia Gerada (kWh) - ano`,
                energyYearlyData,
                graphWidth / 2
              )}
              {renderGraph(
                `Energia Gerada (kWh) - dia`,
                energyDailyData,
                graphWidth / 2
              )}
            </SubContainer>
            <SubContainer>
              {renderGraph(
                `Energia Gerada (kWh) - mês`,
                energyMonthlyData,
                graphWidth
              )}
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
