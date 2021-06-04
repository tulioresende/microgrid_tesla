import { array } from "prop-types";

export const sumArrayObjectsByProperty = (arrayTa) => {
  var result = [];
  arrayTa.reduce(function (res, value) {
    if (!res[value.hour]) {
      res[value.hour] = { hour: value.hour, total: 0 };
      result.push(res[value.hour]);
    }
    res[value.hour].total += value.energy_kwh;
    return res;
  }, {});
  return result;
};

export const generateArrayToChartBar = (originArray, label, xLabel, yLabel) => {
  const array = [];

  originArray.map((measure) => {
    array.push({
      x: measure[xLabel],
      y: measure[yLabel],
    });
  });

  return [
    {
      label,
      data: array,
    },
  ];
};
