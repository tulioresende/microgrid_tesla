import React from 'react';

import BatteryStatus from '../../../globalVariables/cardStatusBatteryControl/CardStatusBatteryControl';
import SvgIcons from '../../../assets/svg';
import {Colors} from '../../../globalVariables/Colors';


import {
    Container,
    Title,
    Line,
    TitleName,
}
from './styles';
import { getIcon, iconList, setDisconnectedDefaultValue } from './Controls';

const CardStatusBattery = ({
    status= BatteryStatus.disconnected,
    chargeState = 0,
    voltage = 0,
    current = 0,
    name = 'bateria sem nome',
}) =>{

    const setIcon = (status, chargeState) =>{
        const icon = getIcon(status, chargeState);

        switch(icon){
            case iconList.emptyBattery:
                return <SvgIcons.EmptyBattery color={Colors.green}/>
            case iconList.fullBattery:
                return <SvgIcons.FullBattery color={Colors.green}/>
            case iconList.threeFourBattery:
                return <SvgIcons.ThreeFourBattery color={Colors.green}/>
            case iconList.disconnectedBattery:
                return <SvgIcons.DisconnectedBattery color={Colors.green}/>
            case iconList.halfBattery:
                return <SvgIcons.HalfBattery color={Colors.green}/>
            case iconList.oneFourBattery:
                return <SvgIcons.OneFourBattery color={Colors.green}/>
            default:
                return <SvgIcons.DisconnectedBattery color={Colors.green}/>
            } 
        }


    return (
        <Container>
            <TitleName>{name}</TitleName>
            {setIcon(status,chargeState)}
            <Title>{`Status: ${status}`}</Title>
            <Title>{`Estado Carga: ${setDisconnectedDefaultValue(`${chargeState}%`, status)}`}</Title>
            <Line>
                <Title>{`Tensão: ${setDisconnectedDefaultValue(`${voltage} V`,status)}`}</Title>
                <Title>{`Corrente: ${setDisconnectedDefaultValue(`${current} A`,status)}`}</Title>
                </Line>
                <Title>{`Potência: ${setDisconnectedDefaultValue(`${voltage*current} W`,status)}`}</Title>
        </Container>
    );
}

export default CardStatusBattery;