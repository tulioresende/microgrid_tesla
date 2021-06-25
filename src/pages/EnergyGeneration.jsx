import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EneryGeneration from "../classes/EnergyGeneration";

import BarChart from "../components/charts/BarChart";
import PageStructure from "../components/pageStructure/PageStructure";
import {
  getEnergyGenerationDataHourly,
  getEnergyGenerationDataDaily,
  getEnergyGenerationDataMonthly,
  removeData,
  pushData,
} from "../firebase/services/energyGeneration";
import { generateArrayToChartBar } from "../utils/functions/Array";
import {
  getDateFormatted,
  getMonthNameByNumber,
} from "../utils/functions/Date";

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
  const [energyHourlyData, setEnergyHourlyData] = useState([]);
  const [energyDailyData, setEnergyDailyData] = useState([]);
  const [energyMonthlyData, setEnergyMonthlyData] = useState([]);

  const graphHeight = 240;
  const graphWidth = 1000;

  const todayDate = new Date();
  const currentMonth = todayDate.getMonth() + 1;
  const currentYear = todayDate.getFullYear();
  const currentDay = todayDate.getDate();
  const currentDate = getDateFormatted(currentYear, currentMonth, currentDay);

  const generateArrayToChart = (array, propertyGroup) => {
    const arrayRet = generateArrayToChartBar(
      array,
      "energia (kWh)",
      propertyGroup || `group`,
      `total`
    );
    return arrayRet;
  };

  useEffect(() => {
    const getData = async () => {
      const listHourly = await getEnergyGenerationDataHourly(currentDate);
      const energyGenerationHourly = new EneryGeneration(listHourly);
      const arrayHourly = generateArrayToChart(
        energyGenerationHourly.getHourlyData(),
        `hour`
      );

      const listDaily = await getEnergyGenerationDataDaily(currentMonth);
      const energyGenerationDaily = new EneryGeneration(
        listDaily,
        currentMonth,
        currentYear
      );
      const arrayDaily = generateArrayToChart(
        energyGenerationDaily.getDailyData(),
        `day`
      );

      const listMonthly = await getEnergyGenerationDataMonthly(currentYear);
      const energyGenerationMonthly = new EneryGeneration(listMonthly);
      const arrayMonthly = generateArrayToChart(
        energyGenerationMonthly.getMonthData(),
        `month`
      );

      setEnergyHourlyData(arrayHourly);
      setEnergyDailyData(arrayDaily);
      setEnergyMonthlyData(arrayMonthly);
      setIsLoading(false);
    };
    getData();
  }, []);

  const deleteData = async () => {
    // await removeData();
    // await pushData();
    alert(`deletou`);
  };

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
            <button onClick={deleteData}>apagar dados</button>
            <SubContainer>
              {renderGraph(
                `Energia Gerada em ${currentYear} - kWh`,
                energyMonthlyData,
                graphWidth / 2
              )}
              {renderGraph(
                `Energia Gerada hoje - kWh`,
                energyHourlyData,
                graphWidth / 2
              )}
            </SubContainer>
            <SubContainer>
              {renderGraph(
                `Energia Gerada em ${getMonthNameByNumber(
                  currentMonth
                )} - kWh `,
                energyDailyData,
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
