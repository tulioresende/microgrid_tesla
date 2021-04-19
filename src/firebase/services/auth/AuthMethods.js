//import firebase from '../../firebase';
import firebase from 'firebase';


const signup = (email, password, setErrors, setToken) =>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(async res => {
        const token = await Object.entries(res.user)[5][1].b
        await localStorage.setItem('token', token)
        setToken(window.localStorage.token)
    })
    .catch(err => {
        setErrors(prev => ([...prev, err.message]))
    });
};


const signin = (email, password, setErrors, setToken) =>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(async res => {
        const token = await Object.entries(res.user)[5][1].b
        await localStorage.setItem('token', token)
        setToken(window.localStorage.token)
    })
    .catch(err => {
        setErrors(prev => ([...prev, err.message]))
    });
};

const signout =(setErrors, setToken) => {
  firebase.auth().signOut().then( res => {
    localStorage.removeItem('token')
    setToken(null)
  })
  .catch(err => {
    setErrors(prev => ([...prev, err.message]))
    localStorage.removeItem('token')
    setToken(null)
    console.error(err.message)
  })
};

const getToken =(setToken) => {
    var token = localStorage.getItem('token');
    setToken(token);
    return token;
};




export const authMethods = {
    signup,
    signin,
    signout,
    getToken,
};