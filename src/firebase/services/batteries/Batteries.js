import firebase from '../../firebase';


export const getBatteriesCurrentData= async () =>{
    const supervisory = firebase.database().ref('supervisorio/baterias');
    let batteriesData = [];
    await supervisory.once('value', (snapshot) => {
      batteriesData = snapshot.val();
    });
    return batteriesData;
}

export default getBatteriesCurrentData;