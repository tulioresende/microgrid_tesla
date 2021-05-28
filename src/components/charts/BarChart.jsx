import React from "react";
import { Chart } from "react-charts";
import Proptypes from "prop-types";

export const BarChart = ({ width, height }) => {
  const data = React.useMemo(
    () => [
      {
        label: "corrente",
        data: [
          { x: `1am`, y: 15 },
          { x: 2, y: 15 },
          { x: 3, y: 15 },
        ],
      },
      {
        label: "tensao",
        data: [
          { x: `1am`, y: 20 },
          { x: 2, y: 20 },
          { x: 3, y: 20 },
          { x: 4, y: 25 },
        ],
      },
      {
        label: "potencia",
        data: [
          { x: `1am`, y: 30 },
          { x: 2, y: 30 },
          { x: 3, y: 30 },
        ],
      },
    ],
    []
  );

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
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <Chart data={data} axes={axes} series={series} tooltip />
    </div>
  );
};

BarChart.propTypes = {
  width: Proptypes.number.isRequired,
  height: Proptypes.number.isRequired,
  dataVector: Proptypes.arrayOf(Proptypes.object),
};

export default BarChart;
