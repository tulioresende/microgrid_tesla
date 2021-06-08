import { getMonthNameByNumber } from "../utils/functions/Date";

export default class EneryGeneration {
  constructor(array) {
    this.array = array;
  }

  getMonthData = () => {
    const newArray = [];

    this.array.map((obj) => {
      newArray.push({ ...obj, month: getMonthNameByNumber(obj.group) });
    });
    return newArray;
  };
}
