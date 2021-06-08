import { sumArrayObjectsByProperty } from "../../utils/functions/Array";
import firebase from "../firebase";

export const getEnergyGenerationDataDaily = async (date) => {
  const data = await getEnergyGenerationData(`date`, date);

  const dailySum = sumArrayObjectsByProperty(data, "hour", "energy_kwh");

  return dailySum;
};

export const getEnergyGenerationDataMonthly = async (month) => {
  const data = await getEnergyGenerationData(`month`, month);

  const dailySum = sumArrayObjectsByProperty(data, "day", "energy_kwh");

  return dailySum;
};

export const getEnergyGenerationDataYearly = async (year) => {
  const data = await getEnergyGenerationData(`year`, year);

  const dailySum = sumArrayObjectsByProperty(data, "month", "energy_kwh");

  return dailySum;
};

const getEnergyGenerationData = async (filterProperty, value) => {
  const supervisory = firebase
    .database()
    .ref("supervisorio/geracaoFV/diario")
    .orderByChild(filterProperty)
    .equalTo(value);
  let energyGenerationArray = [];
  await supervisory.once("value").then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      energyGenerationArray.push(JSON.parse(JSON.stringify(childSnapshot)));
    });
  });

  return energyGenerationArray;
};

export default getEnergyGenerationDataDaily;
