import React from 'react';

import Components from '../../components';
import Pages from '../../pages';


import {
    Container,
    SubContainer
} from './styles';

const MainMenu = () =>{
    return (
        <Container>
            <Components.SideMenu/>
            <SubContainer>
                <Components.Header/>
                <Pages.Dashboards/>
            </SubContainer>
        </Container>
    );
}

export default MainMenu;