import React from 'react';

import TeslaIcon from '../../assets/jpeg/logoteslaV2.jpeg';


import {
    Container, 
    Image,
    MenuTitle,
    MenuItem,
} from './styles';


const SideMenu = ({visible=true}) =>{

        return (
            <Container width={visible?"256":"0"}>
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

export default SideMenu;