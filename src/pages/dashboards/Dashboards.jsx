import React from 'react';

import DashboardItem from '../../components/dashboardItem/DashboardItem';

import Icons from '../../globalVariables/componentsControl/DashboardItemControl';

import Container from './styles';

const Dashboards = () =>{
    return (
        <Container>
            <DashboardItem icon= {Icons.battery} />
            <DashboardItem icon= {Icons.powerLine} />
        </Container>
    );
}

export default Dashboards;