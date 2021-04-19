import React, {useState} from 'react';
import {authMethods} from '../firebase/services/auth/AuthMethods'




export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
    
    const [inputs, setInputs] = useState({email: '', password: ''})
    const [errors, setErrors] = useState([]);
    const [token, setToken] = useState(null);

    const handleSignup = () => {
        return authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
    };

    const getToken = () => {
        return authMethods.getToken(setToken);
    };

    const handleSignin = () => {
        return authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
    };

    const handleSignout = () => {
        authMethods.signout(setErrors,setToken)
    }

    return (
        <firebaseAuth.Provider
            value={{
                handleSignup,
                handleSignin,
                handleSignout,
                getToken,
                setInputs,
                inputs,
                errors,
                token,
            }}>
            {props.children}
        </firebaseAuth.Provider>
    );
};

export default AuthProvider;