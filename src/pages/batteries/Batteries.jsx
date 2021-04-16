import React, { useEffect, useState } from 'react';

import Cards from '../../components/cards';
import PageStructure from '../../components/pageStructure/PageStructure';
import getBatteriesCurrentData from '../../firebase/services/batteries/Batteries';
import { BatteryStatusTranslate } from '../../utils/functions/Batteries';

const Batteries = () =>{
    const [batteriesData, setBatteriesData] = useState([]);

    useEffect(() =>{
        setBatteriesData(getBatteriesCurrentData());
    },[]);

    const renderFunction = () =>{
        return(
            <>
                {batteriesData.map((battery) => 
                    <Cards.CardStatusBattery 
                        name={battery.nome} 
                        current={battery.corrente} 
                        voltage={battery.tensao} 
                        status={BatteryStatusTranslate(battery.status)} 
                        chargeState={battery.estadoCarga}
                    />)
                }
            </>
        )
    }

    return (
        <PageStructure renderFunction={renderFunction}/>
    );
}

export default Batteries;