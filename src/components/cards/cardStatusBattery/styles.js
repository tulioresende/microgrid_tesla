import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 200px;
  padding: 6px 12px 12px 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 12px;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 110, 0, 0.2),
      0 6px 20px 0 rgba(0, 200, 0, 0.19);
    cursor: pointer;
  }
`;

export const Title = styled.text`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const TitleName = styled.text`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Line = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default Container;
