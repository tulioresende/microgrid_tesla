import React from "react";
import { Chart } from "react-charts";
import Proptypes from "prop-types";

export const BarChart = ({ width, height }) => {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          { x: 1, y: 10 },
          { x: 2, y: 10 },
          { x: 3, y: 10 },
        ],
      },
      {
        label: "Series 2",
        data: [
          { x: 1, y: 20 },
          { x: 2, y: 20 },
          { x: 3, y: 20 },
        ],
      },
      {
        label: "Series 3",
        data: [
          { x: 1, y: 30 },
          { x: 2, y: 30 },
          { x: 3, y: 30 },
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
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
      <Chart data={data} axes={axes} tooltip />
    </div>
  );
};

BarChart.propTypes = {
  width: Proptypes.number.isRequired,
  height: Proptypes.number.isRequired,
  dataVector: Proptypes.arrayOf(Proptypes.object),
};

export default BarChart;
