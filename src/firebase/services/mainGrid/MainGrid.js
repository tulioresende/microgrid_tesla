import firebase from '../../firebase';


export const getMainGridCurrentData= async () =>{
    const supervisory = firebase.database().ref('supervisorio/redePrincipal');
    let batteriesData = [];
    await supervisory.once('value', (snapshot) => {
      batteriesData = snapshot.val();
    });
    return batteriesData;
}

export default getMainGridCurrentData;