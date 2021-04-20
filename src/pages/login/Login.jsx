import React, {useContext} from 'react';
import Inputs from '../../components/inputs';
import { firebaseAuth } from '../../provider/AuthProvider';


const Login = () => {

    const {handleSignin, inputs, setInputs, errors} = useContext(firebaseAuth);

    const logIn = () =>{
        handleSignin(inputs.email, inputs.password);
    }

    const handleChange = e => {
        const {name, value} = e.target
        console.log(inputs)
        setInputs(prev => ({...prev, [name]: value}))
    }

    return (
        <div>
            Login
            <Inputs.LoginInput 
                onChangeFunc={handleChange} 
                name="email" 
                placeholder='email' 
                value={inputs.email}
                isPassword={false}
            />
            <Inputs.LoginInput  
                onChange={handleChange} 
                name="password" 
                placeholder='password' 
                value={inputs.password} 
                isPassword
            />
            <button onClick={logIn}>Logar!</button>
            {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}

        </div>
    );
};

export default Login;