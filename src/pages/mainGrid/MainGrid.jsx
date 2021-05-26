import React, { useEffect, useState } from 'react';

import Cards from '../../components/cards';
import PageStructure from '../../components/pageStructure/PageStructure';
import getMainGridCurrentData from '../../firebase/services/mainGrid/MainGrid';
import { BatteryStatusTranslate } from '../../utils/functions/Batteries';
import { sleep } from '../../utils/functions/General';

import {Container} from './styles';

const MainGrid = () =>{
    const [mainGridData, setMainGridData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [trigger, setTrigger] = useState(false);

    useEffect(() =>{
        const getData = async () =>{
            const list = await getMainGridCurrentData();
            setMainGridData(list);
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
                <Container>
                    <Cards.CardStatusMainGrid data={mainGridData}
                    />
                </Container>
                )}
            </>
        )
    }
    return (
        <PageStructure renderFunction={renderFunction} pageTitle={"Rede Principal"}/>
    );
}

export default MainGrid;