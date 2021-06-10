import React from "react";

import DashboardItem from "../../components/dashboardItem/DashboardItem";
import PageStructure from "../../components/pageStructure/PageStructure";
import svg from "../../assets/svg";
import Colors from "../../globalVariables/Colors";

const { Battery, PowerLine, EnergyGeneration, GreenEarth } = svg;

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
        <DashboardItem
          Title={`Geração Energia`}
          routeAddress={"energy_generation"}
        >
          <EnergyGeneration color={Colors.green} />
        </DashboardItem>
        <DashboardItem
          Title={`Meio Ambiente`}
          routeAddress={"environment_impacts"}
        >
          <GreenEarth color={Colors.green} />
        </DashboardItem>
      </>
    );
  };

  return (
    <PageStructure renderFunction={renderFunction} pageTitle={"Dashboards"} />
  );
};

export default Dashboards;
