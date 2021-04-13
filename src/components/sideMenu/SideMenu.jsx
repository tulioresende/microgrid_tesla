import React from 'react';

import TeslaIcon from '../../assets/jpeg/logoteslaV2.jpeg';


import {
    Container, 
    Image,
    MenuTitle,
    MenuItem,
} from './styles';


const SideMenu = ({visible=true}) =>{

    if (visible){
        return (
            <Container>
                <Image src={TeslaIcon}/>
                <MenuTitle>
                    Menu Principal
                </MenuTitle>
                <MenuItem>
                    Dashboards
                </MenuItem>
                <MenuItem>
                    Controles
                </MenuItem>
            </Container>
        );
    }
    return null;
}

export default SideMenu;