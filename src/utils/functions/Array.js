export const sumArrayObjectsByProperty = (
  array,
  propertyName,
  propertyToSum
) => {
  var result = [];
  array.reduce(function (res, value) {
    if (!res[value[propertyName]]) {
      res[value[propertyName]] = { group: value[propertyName], total: 0 };
      result.push(res[value[propertyName]]);
    }
    res[value[propertyName]].total += value[propertyToSum];
    return res;
  }, {});
  return result;
};

export const sumArrayObjects = (array, propertyToSum) => {
  var total = 0;
  array.map((obj) => {
    total += obj[propertyToSum];
  }, {});
  return total;
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
