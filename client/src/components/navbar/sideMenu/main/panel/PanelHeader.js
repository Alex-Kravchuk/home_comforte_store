import React from "react";

import {
  PanelHeaderImg,
  PanelHeaderText,
  PanelHeaderWrapper,
  PanelHeaderContainer,
} from "./Panel.styled";

const PanelHeader = ({ text, img }) => {
  return (
    <PanelHeaderWrapper>
      <PanelHeaderContainer>
        <PanelHeaderText>{text}</PanelHeaderText>
        <PanelHeaderImg src={process.env.REACT_APP_API_URL + img} alt={text} />
      </PanelHeaderContainer>
    </PanelHeaderWrapper>
  );
};

export default PanelHeader;
