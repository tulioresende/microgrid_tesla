import React from 'react';

import DashboardItem from '../../components/dashboardItem/DashboardItem';

import Icons from '../../globalVariables/componentsControl/DashboardItemControl';

import PageStructure from '../../components/pageStructure/PageStructure';

const Batteries = () =>{

    const renderFunction = () =>{
        return(
            <>
                <DashboardItem icon= {Icons.battery} routeAddress={'battery'}/>
            </>
        )
    }

    return (
        <PageStructure renderFunction={renderFunction}/>
    );
}

export default Batteries;