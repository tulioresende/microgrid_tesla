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
    const handleOnClick = () => history.push(`/dashboards`);

    return (
        <Container width={visible?"256":"0"}>
            <Image src={TeslaIcon}/>
            <MenuTitle>
                Menu Principal
            </MenuTitle>
            <MenuItem onClick={handleOnClick}>
                Dashboards
            </MenuItem>
            <MenuItem>
                Controles
            </MenuItem>
        </Container>
    );
}

export default SideMenu;