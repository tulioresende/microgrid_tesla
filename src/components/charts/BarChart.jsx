import React from "react";
import { Chart } from "react-charts";

export const BarChart = ({ width = `400`, height = `400` }) => {
  const data = React.useMemo(
    () => [
      {
        label: "9am",
        data: [
          { x: `1am`, y: 15 },
          { x: 2, y: 15 },
          { x: 3, y: 15 },
        ],
      },
      {
        label: "10am",
        data: [
          { x: `1am`, y: 20 },
          { x: 2, y: 20 },
          { x: 3, y: 20 },
        ],
      },
      {
        label: "Series 3",
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

export default BarChart;
