const generateDataMock = ({ xLabel, yMaxValue, length }) => {
  const dataVector = [];
  let i = 1;

  while (i <= length) {
    dataVector.push({
      x: `${xLabel}-${i}`,
      y: Math.random() * yMaxValue,
    });
    i++;
  }

  return dataVector;
};

export const generateOneGroupDataMock = ({
  label,
  xLabel,
  yMaxValue,
  length,
}) => {
  const dataVector = generateDataMock({ xLabel, yMaxValue, length });
  return {
    label,
    data: dataVector,
  };
};
