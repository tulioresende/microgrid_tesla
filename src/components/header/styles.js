import styled from 'styled-components'
import { Colors } from '../../globalVariables/Colors';

import {HEADER_PERCENTUAL_OCCUPATION} from '../../globalVariables/Design';


export const Container = styled.div`
    display: flex;
    background: ${Colors.green};
    height: ${HEADER_PERCENTUAL_OCCUPATION}vh;
    align-items: center;
    justify-content: space-between;
    padding: 0px 32px;
`;

export const SubContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    : hover {
        background: ${Colors.greenLight};
    }
    border-radius: 24px;
    height: 48px;
    width: 48px;
`;


export const Title = styled.text`
    color: ${Colors.white};
    font-size: 30px;
`;

export const UserName = styled.text`
    margin-left: 8px;
    color: ${Colors.white};
    font-size: 16px;
`;


export const MenuImg = styled.img`
    height:40px;
`;




export default Container;