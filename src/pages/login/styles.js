import styled from 'styled-components';
import Colors from '../../globalVariables/Colors';


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: ${Colors.green};
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 8px;
    padding: 16px;
`;

export const Title = styled.text`
    font-size: 36px;
    display: flex;
    margin-bottom: 24px;
    color: grey;
`;

export const Image = styled.img`
    width:80%;
    display: flex;
    margin-bottom: 24px;
`;