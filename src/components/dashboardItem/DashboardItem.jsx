import React from "react";
import { useHistory } from "react-router-dom";
import Proptypes from "prop-types";

import { Container, TitleText } from "./styles";

const DashboardItem = ({ routeAddress, Title, children }) => {
  const history = useHistory();
  const handleOnClick = () => history.push(`/${routeAddress}`);

  return (
    <Container onClick={handleOnClick}>
      {children}
      <TitleText>{Title}</TitleText>
    </Container>
  );
};

DashboardItem.propTypes = {
  routeAddress: Proptypes.string.isRequired,
  Title: Proptypes.string.isRequired,
};

export default DashboardItem;
