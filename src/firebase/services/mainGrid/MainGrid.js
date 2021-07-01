import firebase from "../../firebase";

export const getMainGridLastRecordsDataPhaseA = async (recordsNumber = 1) => {
  const data = getMainGridLastRecordsDataByPhase("phaseA", recordsNumber);
  return data;
};

export const getMainGridLastRecordsDataPhaseB = async (recordsNumber = 1) => {
  const data = getMainGridLastRecordsDataByPhase("phaseB", recordsNumber);
  return data;
};

export const getMainGridLastRecordsDataPhaseC = async (recordsNumber = 1) => {
  const data = getMainGridLastRecordsDataByPhase("phaseC", recordsNumber);
  return data;
};

const getMainGridLastRecordsDataByPhase = async (phase, recordsNumber = 1) => {
  const supervisory = firebase
    .database()
    .ref("supervisorio/redePrincipal/" + phase)
    .limitToLast(recordsNumber);
  let mainGridData = [];
  await supervisory.once("value").then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      mainGridData.push(JSON.parse(JSON.stringify(childSnapshot)));
    });
  });

  return mainGridData;
};

export default getMainGridLastRecordsDataPhaseA;
