import styled from 'styled-components'
import { Colors } from '../../globalVariables/Colors';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${Colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.5s;
    top: 0; 
    left: 0;
    width: ${props => props.width}px;
    overflow-x: hidden;
`;

export const Image = styled.img`
    margin-top: 16px;
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
    margin-left: 48px;
    font-weight: bold;
    width: 100%;
    :hover {
        background-color: ${Colors.green};
        color: ${Colors.white};
    }
`;



export default Container;