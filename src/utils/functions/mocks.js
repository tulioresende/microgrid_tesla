export const generateOneBarDataMock = ({
  label,
  xLabel,
  yMaxValue,
  length,
}) => {
  const dataVector = [];
  let i = 1;

  while (i <= length) {
    dataVector.push({
      x: `${xLabel}-${i}`,
      y: Math.random() * yMaxValue,
    });
    i++;
  }

  return [
    {
      label,
      data: dataVector,
    },
  ];
};

export const electricVariablesDataMock = [
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
];
