import React from "react";

import DashboardItem from "../../components/dashboardItem/DashboardItem";
import PageStructure from "../../components/pageStructure/PageStructure";
import Charts from "../../components/charts";
import svg from "../../assets/svg";
import Colors from "../../globalVariables/Colors";

const { BarChart, LineChart } = Charts;
const { Battery, PowerLine, EnergyGeneration } = svg;

const Dashboards = () => {
  const renderFunction = () => {
    return (
      <>
        <DashboardItem Title={`Baterias`} routeAddress={"batteries"}>
          <Battery color={Colors.green} />
        </DashboardItem>
        <DashboardItem Title={`Rede de Dist.`} routeAddress={"mainGrid"}>
          <PowerLine color={Colors.green} />
        </DashboardItem>
        <DashboardItem Title={`Geração Energia`} routeAddress={"batteries"}>
          <EnergyGeneration color={Colors.green} />
        </DashboardItem>

        <BarChart width={200} height={200} />
        <LineChart width={200} height={200} />
      </>
    );
  };

  return (
    <PageStructure renderFunction={renderFunction} pageTitle={"Dashboards"} />
  );
};

export default Dashboards;
