import styled from 'styled-components';

import { Colors } from '../../globalVariables/Colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: 130px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 12px;

    :hover {
        box-shadow: 0 4px 8px 0 rgba(0, 110, 0, 0.2), 0 6px 20px 0 rgba(0, 200, 0, 0.19);
    }

`;

export const Title = styled.text`
    color: ${Colors.green};
`;

export default Container;