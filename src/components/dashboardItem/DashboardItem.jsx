import React from 'react';

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
    icon='Battery'
}) =>{

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
        <Container>
            {getIcon(icon)}
        </Container>
    );
}

export default DashboardItem;