import {
  sumArrayObjects,
  sumArrayObjectsByProperty,
} from "../../utils/functions/Array";
import firebase from "../firebase";

export const getEnergyGenerationDataHourly = async (date) => {
  const data = await getEnergyGenerationData(`date`, date);

  const dailySum = sumArrayObjectsByProperty(data, "hour", "energy_kwh");

  return dailySum;
};

export const getEnergyGenerationDataDaily = async (month) => {
  const data = await getEnergyGenerationData(`month`, month);

  const monthlySum = sumArrayObjectsByProperty(data, "day", "energy_kwh");

  return monthlySum;
};

export const getEnergyGenerationDataMonthly = async (year) => {
  const data = await getEnergyGenerationData(`year`, year);

  const yearlySum = sumArrayObjectsByProperty(data, "month", "energy_kwh");

  return yearlySum;
};

export const getEnergyGenerationTotal = async () => {
  const data = await getEnergyGenerationTotalData();

  const yearlySum = sumArrayObjects(data, "energy_kwh");

  return yearlySum;
};

const getEnergyGenerationTotalData = async () => {
  const supervisory = firebase.database().ref("supervisorio/geracaoFV/diario");
  let energyGenerationArray = [];
  await supervisory.once("value").then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      energyGenerationArray.push(JSON.parse(JSON.stringify(childSnapshot)));
    });
  });

  return energyGenerationArray;
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

export const getEnergyGenerationInitDate = async () => {
  const supervisory = firebase
    .database()
    .ref("supervisorio/geracaoFV/diario")
    .orderByChild("date")
    .limitToFirst(1);
  let energyGenerationArray = [];
  await supervisory.once("value").then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      energyGenerationArray.push(JSON.parse(JSON.stringify(childSnapshot)));
    });
  });

  const date = new Date(
    energyGenerationArray[0].year,
    energyGenerationArray[0].month - 1,
    energyGenerationArray[0].day
  );

  return date;
};

export default getEnergyGenerationDataDaily;
