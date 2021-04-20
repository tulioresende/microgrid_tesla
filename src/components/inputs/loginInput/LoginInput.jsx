import React from 'react';


const LoginInput = ({
    onChangeFunc,
    name,
    placeholder,
    value,
    isPassword=false,
}) =>{

    return(
        <input 
            onChange={onChangeFunc} 
            name={name} 
            placeholder={placeholder} 
            value={value}
            type={isPassword?"password":""}
        />

    );
}

export default LoginInput;