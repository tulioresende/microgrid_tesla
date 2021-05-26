import React from 'react';

import SvgIcons from '../../../assets/svg';
import {Colors} from '../../../globalVariables/Colors';


import {
    Container,
    Title,
    Line,
}
from './styles';

const CardStatusMainGrid = ({
    data = {},
}) =>{

    const mountDataShow  = (phase=`not found`, voltage=10, current=10) =>{
        return (  
            <Line>
                <Title>{`Fase ${phase}`}</Title>
                <Title>{`Tensão: ${(`${voltage} V`)}`}</Title>
                <Title>{`Corrente: ${(`${current} A`)}`}</Title>
                <Title>{`Potência: ${(`${voltage*current} W`)}`}</Title>
            </Line>
        )

    }

    return (
        <Container>
            <SvgIcons.ElectricalPanel width={150} color={Colors.green}/>
            <Title>{`Status: ${data?.status}`}</Title>
            <Title>{`Frequência: ${data?.frequency} Hz`}</Title>
            {mountDataShow('A',data?.phaseA.voltage, data?.phaseA.current)}
            {mountDataShow('B',data?.phaseB.voltage, data?.phaseB.current)}
            {mountDataShow('C',data?.phaseC.voltage, data?.phaseC.current)}
        </Container>
    );
}

export default CardStatusMainGrid;