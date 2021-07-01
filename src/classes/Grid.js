import { generateArrayToChartBar } from "../utils/functions/Array";

export default class Grid {
  getVoltageChartData = (array) => {
    const newArray = generateArrayToChartBar(
      array,
      `tensão (V)`,
      "time",
      `voltage`
    );
    return newArray;
  };

  getCurrentChartData = (array) => {
    const newArray = generateArrayToChartBar(
      array,
      `corrente (A)`,
      "time",
      `current`
    );
    return newArray;
  };

  getActivePowerChartData = (array) => {
    const newArray = generateArrayToChartBar(
      array,
      `Potência (W)`,
      "time",
      `activePower`
    );
    return newArray;
  };
}
