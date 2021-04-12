import React from 'react';

import DashboardItem from '../../components/dashboardItem/DashboardItem';
import Components from '../../components';


import Icons from '../../globalVariables/componentsControl/DashboardItemControl';

import {
    Container,
    SubContainer,
    MainContainer,
 } from './styles';

const Dashboards = () =>{
    return (
        <Container>
            <Components.SideMenu/>
            <SubContainer>
                <Components.Header titleText={'Dashboard'}/>
                <MainContainer>
                    <DashboardItem icon= {Icons.battery} />
                    <DashboardItem icon= {Icons.powerLine} />
                </MainContainer>
            </SubContainer>
        </Container>
    );
}

export default Dashboards;