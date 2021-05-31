import React from "react";
import { Chart } from "react-charts";
import Proptypes from "prop-types";
import styled from "styled-components";

export const BarChart = ({ width, height, dataVector, children }) => {
  const Container = styled.div`
    text-align: center;
    flex-direction: column;
    height: ${height}px;
    width: ${width}px;
  `;
  const data = React.useMemo(() => dataVector, [dataVector]);

  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { position: "left", type: "linear", stacked: false },
    ],
    []
  );

  return (
    <Container>
      {children}
      <Chart data={data} axes={axes} series={series} tooltip />
    </Container>
  );
};

BarChart.propTypes = {
  children: Proptypes.oneOfType([
    Proptypes.arrayOf(Proptypes.node),
    Proptypes.node,
  ]),
  width: Proptypes.number.isRequired,
  height: Proptypes.number.isRequired,
  dataVector: Proptypes.arrayOf(Proptypes.object),
};

export default BarChart;
