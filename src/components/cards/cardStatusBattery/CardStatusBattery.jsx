import React from 'react';

import BatteryStatus from '../../../globalVariables/cardStatusBatteryControl/CardStatusBatteryControl';
import Battery from '../../../assets/svg/Battery';
import EmptyBattery from '../../../assets/svg/EmptyBattery';
import {Colors} from '../../../globalVariables/Colors';


import {
    Container,
    Title,
    Line,
    TitleName,
}
from './styles';

const CardStatusBattery = ({
    status= 1,//BatteryStatus.disconnected,
    chargeState = 0,
    voltage = 0,
    current = 0,
    name = 'bateria sem nome',
}) =>{

    const getIcon = (status, chargeState) =>{
        switch(status){
            case BatteryStatus.disconnected:
                return (
                    <Battery color={Colors.green}/>
                );
            default:{
                switch(chargeState){
                    case 0:
                        return (
                            <EmptyBattery color={Colors.green}/>
                    );
                    default:
                        return (
                            <Battery color={Colors.green}/>
                        );
                }
            } 
                
        }
    }

    return (
        <Container>
            <TitleName>{name}</TitleName>
            {getIcon(status,chargeState)}
            <Title>{`Status: ${status}`}</Title>
            <Title>{`Estado Carga: ${chargeState}%`}</Title>
            <Line>
                <Title>{`Tensão: ${voltage} V`}</Title>
                <Title>{`Corrente: ${current} A`}</Title>
                </Line>
                <Title>{`Potência: ${voltage*current} W`}</Title>
        </Container>
    );
}

export default CardStatusBattery;