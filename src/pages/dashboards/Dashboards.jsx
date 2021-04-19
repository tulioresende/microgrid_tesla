import React from 'react';

import DashboardItem from '../../components/dashboardItem/DashboardItem';

import Icons from '../../globalVariables/componentsControl/DashboardItemControl';

import PageStructure from '../../components/pageStructure/PageStructure';

const Dashboards = () =>{

    const renderFunction = () =>{
        return(
            <>
                <DashboardItem icon= {Icons.battery} routeAddress={'batteries'}/>
                <DashboardItem icon= {Icons.powerLine} routeAddress={'mainGrid'}/>
            </>
        )
    }

    return (
        <PageStructure renderFunction={renderFunction} pageTitle={"Dashboards"}/>
    );
}

export default Dashboards;