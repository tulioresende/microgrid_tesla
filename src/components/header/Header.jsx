import React, { useContext } from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import User from '../../assets/png/profile-user.png';

import {
    Container,
    Title,
    MenuImg,
    SubContainer,
    UserName,
    SubContainerIcon,
} from './styles';
import { firebaseAuth } from '../../provider/AuthProvider';


const Header = ({
    onClickMenuIconFunc,
    titleText,
}) =>{

    const {handleSignout} = useContext(firebaseAuth);

    const logOut = () =>{
        handleSignout();
    }

    return (
        <Container>
            <SubContainerIcon onClick ={onClickMenuIconFunc}>
                <FontAwesomeIcon icon={faBars} color={'white'} size="2x"/>
            </SubContainerIcon>
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
                <UserName onClick ={logOut}>
                    Sair
                </UserName>
            </SubContainer>
        </Container>
    );
}

export default Header;