import React from 'react';

import TeslaIcon from '../../assets/jpeg/logoteslaV2.jpeg';


import {Container, Image} from './styles';


const SideMenu = () =>{

   

    return (
        <Container>
            <Image src={TeslaIcon}/>
            <h1>
                menu lateral
            </h1>
        </Container>
    );
}

export default SideMenu;