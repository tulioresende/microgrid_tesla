import styled from 'styled-components'
import { Colors } from '../../globalVariables/Colors';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${Colors.white};
    height: 100%;
    padding: 18px 18px  ;
`;

export const Image = styled.img`
    width:80%;
    height:6%;
    display: flex;
`;

export const MenuTitle = styled.text`
    color: ${Colors.green};
    font-size: 30px;
    margin-top: 18px;
`;

export const MenuItem = styled.text`
    color: ${Colors.green};
    font-size: 26px;
    margin-top: 12px;
    font-weight: bold;
    width: 100%;
    :hover {
        background-color: ${Colors.green};
        color: ${Colors.white};
    }
`;



export default Container;