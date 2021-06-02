import React from "react";
import { Chart } from "react-charts";
import Proptypes from "prop-types";
import styled from "styled-components";

export const LineChart = ({ width, height, dataVector, children }) => {
  const Container = styled.div`
    text-align: center;
    flex-direction: column;
    height: ${height}px;
    width: ${width}px;
  `;

  const data = React.useMemo(() => dataVector, [dataVector]);

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <Container>
      {children}
      <Chart data={data} axes={axes} tooltip />
    </Container>
  );
};

LineChart.propTypes = {
  width: Proptypes.number.isRequired,
  height: Proptypes.number.isRequired,
  dataVector: Proptypes.arrayOf(Proptypes.object),
};

LineChart.propTypes = {
  children: Proptypes.oneOfType([
    Proptypes.arrayOf(Proptypes.node),
    Proptypes.node,
  ]),
  width: Proptypes.number.isRequired,
  height: Proptypes.number.isRequired,
  dataVector: Proptypes.arrayOf(Proptypes.object),
};

export default LineChart;
