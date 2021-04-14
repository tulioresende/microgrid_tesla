import React, { useState } from 'react';

import Components from '../../components';

import {
    Container,
    SubContainer,
    MainContainer,
 } from './styles';

const PageStructure = ({renderFunction}) =>{

    const [sideMenuVisible, setSideMenuVisible] = useState(false);

    return (
        <Container>
            <Components.SideMenu visible={sideMenuVisible}/>
            <SubContainer>
                <Components.Header titleText={'Dashboard'}  onClickMenuIconFunc={() => setSideMenuVisible(!sideMenuVisible)} />
                <MainContainer>
                    {renderFunction()}
                </MainContainer>
            </SubContainer>
        </Container>
    );
}

export default PageStructure;