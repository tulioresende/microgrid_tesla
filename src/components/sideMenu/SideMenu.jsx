import React from 'react';
import { useHistory } from 'react-router';

import TeslaIcon from '../../assets/jpeg/logoteslaV2.jpeg';


import {
    Container, 
    Image,
    MenuTitle,
    MenuItem,
} from './styles';


const SideMenu = ({visible=true}) =>{

    const history = useHistory();
    const handleOnClick = (route) => history.push(route);

    return (
        <Container width={visible?"256":"0"}>
            <Image src={TeslaIcon}/>
            <MenuTitle>
                Menu Principal
            </MenuTitle>
            <MenuItem onClick={() => handleOnClick(`/dashboards`)}>
                Dashboards
            </MenuItem>
            <MenuItem onClick={() => handleOnClick(`/login`)}>
                Controles
            </MenuItem>
        </Container>
    );
}

export default SideMenu;