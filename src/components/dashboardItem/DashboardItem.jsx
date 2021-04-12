import React from 'react';

import Battery from '../../assets/svg/Battery';
import PowerLine from '../../assets/svg/PowerLine';

import Icons from '../../globalVariables/componentsControl/DashboardItemControl';

import {
Container,
}
from './styles';

const DashboardItem = ({
    icon='Battery'
}) =>{

    const getIcon = (icon) =>{
        switch(icon){
            case Icons.battery:
                return <Battery />;
            case Icons.powerLine:
            default: 
                return <PowerLine/>;
        }
    }

    return (
        <Container>
            {getIcon(icon)}
        </Container>
    );
}

export default DashboardItem;