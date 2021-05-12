import React, {useContext} from 'react';
import Inputs from '../../components/inputs';
import { firebaseAuth } from '../../provider/AuthProvider';

import {
    Container,
    LoginContainer,
    Image,
    Title,
} from './styles';

import TeslaIcon from '../../assets/jpeg/logoteslaV2.jpeg';


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
        <Container>
            <LoginContainer>
                <Image src={TeslaIcon}/>
                <Title>Microrrede Tesla Data Viewer</Title>
                <Inputs.LoginInput 
                    onChangeFunc={handleChange} 
                    name="email" 
                    placeholder='email' 
                    value={inputs.email}
                    isPassword={false}
                />
                <Inputs.LoginInput  
                    onChangeFunc={handleChange} 
                    name="password" 
                    placeholder='password' 
                    value={inputs.password} 
                    isPassword
                />
                <button onClick={logIn}>Logar!</button>
                {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
            </LoginContainer>
        </Container>
    );
};

export default Login;