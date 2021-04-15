import React from 'react';

import Cards from '../../components/cards';
import PageStructure from '../../components/pageStructure/PageStructure';
import BatteryStatus from '../../globalVariables/cardStatusBatteryControl/CardStatusBatteryControl';

const Batteries = () =>{

    const renderFunction = () =>{
        return(
            <>
                <Cards.CardStatusBattery 
                    name='litio' 
                    current={1} 
                    voltage={125} 
                    status={BatteryStatus.discharging} 
                    chargeState={70}
                />
            </>
        )
    }

    return (
        <PageStructure renderFunction={renderFunction}/>
    );
}

export default Batteries;