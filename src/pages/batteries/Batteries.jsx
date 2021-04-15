import React from 'react';

import Cards from '../../components/cards';
import PageStructure from '../../components/pageStructure/PageStructure';
import BatteryStatus from '../../globalVariables/cardStatusBatteryControl/CardStatusBatteryControl';

const Batteries = () =>{

    const renderFunction = () =>{
        return(
            <>
                <Cards.CardStatusBattery name='litio' current={10} voltage={120} status={BatteryStatus.charging} chargeState={80}/>
            </>
        )
    }

    return (
        <PageStructure renderFunction={renderFunction}/>
    );
}

export default Batteries;