import React from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import User from '../../assets/png/profile-user.png';

import {
    Container,
    Title,
    MenuImg,
    SubContainer,
    UserName,
} from './styles';


const Header = ({titleText='Título Padrão'}) =>{
    return (
        <Container>
            <SubContainer>
                <FontAwesomeIcon icon={faBars} color={'white'} size="2x"/>
            </SubContainer>
            <SubContainer>
                <Title>
                    {titleText}
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