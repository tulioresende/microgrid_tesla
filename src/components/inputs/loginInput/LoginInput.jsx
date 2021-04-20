import React from 'react';

import {
    Input,
 } from "./styles";

const LoginInput = ({
    onChangeFunc,
    name,
    placeholder,
    value,
    isPassword=false,
}) =>{

    return(
        <Input 
            onChange={onChangeFunc} 
            name={name} 
            placeholder={placeholder} 
            value={value}
            type={isPassword?"password":""}
        />

    );
}

export default LoginInput;