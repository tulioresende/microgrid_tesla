import React from 'react';
import { useHistory } from 'react-router-dom';

import Battery from '../../assets/svg/Battery';
import PowerLine from '../../assets/svg/PowerLine';
import Colors from '../../globalVariables/Colors';

import Icons from '../../globalVariables/componentsControl/DashboardItemControl';

import {
Container,
Title,
}
from './styles';

const DashboardItem = ({
    icon='Battery',
    routeAddress = 'dashboards',
}) =>{

    const history = useHistory();
    const handleOnClick = () => history.push(`/${routeAddress}`);
    
    const getIcon = (icon) =>{
        switch(icon){
            case Icons.battery:
                return (
                    <>
                        <Battery color={Colors.green}/>
                        <Title>Baterias</Title>
                    </>
                );
            case Icons.powerLine:
            default: 
                return (
                    <>
                        <PowerLine color={Colors.green}/>
                        <Title>Rede de Dist.</Title>
                    </>
                );
        }
    }

    return (
        <Container onClick = {handleOnClick}>
            {getIcon(icon)}
        </Container>
    );
}

export default DashboardItem;