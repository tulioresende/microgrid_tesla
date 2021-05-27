import React from "react";
import { Chart } from "react-charts";

import DashboardItem from "../../components/dashboardItem/DashboardItem";

import Icons from "../../globalVariables/componentsControl/DashboardItemControl";

import PageStructure from "../../components/pageStructure/PageStructure";
import Charts from "../../components/charts";

const { BarChart, LineChart } = Charts;

const Dashboards = () => {
  const renderFunction = () => {
    return (
      <>
        <DashboardItem icon={Icons.battery} routeAddress={"batteries"} />
        <DashboardItem icon={Icons.powerLine} routeAddress={"mainGrid"} />
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
