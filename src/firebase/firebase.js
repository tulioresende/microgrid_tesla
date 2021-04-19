import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';

const  config = {
    apiKey: "AIzaSyAYINwCDtNn5yqtly5dYMG5DlmRFYxe4wg",
    authDomain: "gd-tesla-ufmg.firebaseapp.com",
    databaseURL: "https://gd-tesla-ufmg-default-rtdb.firebaseio.com",
    projectId: "gd-tesla-ufmg",
    storageBucket: "gd-tesla-ufmg.appspot.com",
    messagingSenderId: "588148468878",
    appId: "1:588148468878:web:f44ceda9b6378af2c26ddf",
    measurementId: "G-4CDKSFH6CD"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();
firebase.auth()


export default firebase;