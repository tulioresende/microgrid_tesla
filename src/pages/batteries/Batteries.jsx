import React, { useEffect, useState } from 'react';

import Cards from '../../components/cards';
import PageStructure from '../../components/pageStructure/PageStructure';
import getBatteriesCurrentData from '../../firebase/services/batteries/Batteries';
import { BatteryStatusTranslate } from '../../utils/functions/Batteries';
import { sleep } from '../../utils/functions/General';

const Batteries = () =>{
    const [batteriesData, setBatteriesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [trigger, setTrigger] = useState(false);

    useEffect(() =>{
        const getData = async () =>{
            const list = await getBatteriesCurrentData();
            setBatteriesData(list);
            setIsLoading(false);
        }
        getData();
    },[trigger]);

    const configTrigger = async () =>{
        while (true){
            await sleep(5);
            setTrigger(!trigger);
        }
    }   

    const renderFunction = () =>{
        configTrigger();
        return(
            <>  
                {isLoading ? ( 
                    <h1>
                        Carregando...
                    </h1>
                ):(
                batteriesData.map((battery) => 
                    <Cards.CardStatusBattery 
                        name={battery.nome} 
                        current={battery.corrente} 
                        voltage={battery.tensao} 
                        status={BatteryStatusTranslate(battery.status)} 
                        chargeState={battery.estadoCarga}
                    />)
                )}
            </>
        )
    }
    return (
        <PageStructure renderFunction={renderFunction} pageTitle={"Baterias"}/>
    );
}

export default Batteries;