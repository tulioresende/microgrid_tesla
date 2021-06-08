export const getDateFormatted = (year, month, day) => {
  return `` + year + insertLeftZero(month) + insertLeftZero(day);
};

const insertLeftZero = (number) => {
  return number > 10 ? number : "0" + number;
};

export default getDateFormatted;
