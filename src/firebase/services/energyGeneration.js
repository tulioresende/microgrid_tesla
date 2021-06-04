import { sumArrayObjectsByProperty } from "../../utils/functions/Array";
import firebase from "../firebase";

export const getEnergyGenerationDataDaily = async (date) => {
  const supervisory = firebase
    .database()
    .ref("supervisorio/geracaoFV/diario")
    .orderByChild("date")
    .equalTo(date);
  let energyGenerationArray = [];
  await supervisory.once("value").then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      energyGenerationArray.push(JSON.parse(JSON.stringify(childSnapshot)));
    });
  });

  const dailySum = sumArrayObjectsByProperty(energyGenerationArray);
  return dailySum;
};

export default getEnergyGenerationDataDaily;
