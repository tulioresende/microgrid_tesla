import firebase from '../../firebase';


export const getBatteriesCurrentData = () =>{
    const supervisory = firebase.database().ref('supervisorio/baterias');
    const batteriesData=[];
    supervisory.on('value', (snapshot) => {
      let inputs = snapshot.val();
      for(let input in inputs){
        batteriesData.push(inputs[input]);
      }
    });
    return batteriesData;
}

export default getBatteriesCurrentData;