import React from 'react';
import MenuImage from '../../assets/png/list.png';
import User from '../../assets/png/profile-user.png';

import {
    Container,
    Title,
    MenuImg,
    SubContainer,
    UserName,
} from './styles';


const Header = () =>{
    return (
        <Container>
            <SubContainer>
                <MenuImg src={MenuImage}/>
            </SubContainer>
            <SubContainer>
                <Title>
                    header
                </Title>
            </SubContainer>
            <SubContainer>
                <MenuImg src={User}/>
                <UserName>
                    Usuário
                </UserName>
            </SubContainer>
        </Container>
    );
}

export default Header;