import {
  getDayOfWeek,
  getHourAMPM,
  getMonthNameByNumber,
} from "../utils/functions/Date";

export default class EneryGeneration {
  constructor(array, month, year) {
    this.array = array;
    this.month = month;
    this.year = year;
  }

  getMonthData = () => {
    const newArray = [];

    this.array.map((obj) => {
      newArray.push({ ...obj, month: getMonthNameByNumber(obj.group) });
    });
    return newArray;
  };

  getHourlyData = () => {
    const newArray = [];

    this.array.map((obj) => {
      newArray.push({ ...obj, hour: getHourAMPM(obj.group) });
    });
    return newArray;
  };

  getDailyData = () => {
    const newArray = [];

    this.array.map((obj) => {
      newArray.push({
        ...obj,
        day:
          getDayOfWeek(
            new Date(this.year, this.month - 1, obj.group)
          ).substring(0, 3) +
          `/` +
          obj.group,
      });
    });
    return newArray;
  };
}
