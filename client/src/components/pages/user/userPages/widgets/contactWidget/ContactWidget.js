import React from "react";

import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";

import {
  WidgetTitle,
  WidgetWrapper,
  WidgetTitleContainer,
} from "../Widget.styled";

import {
  CWInfo,
  CWLabel,
  CWValue,
  CWContainer,
  CWInfoBlock,
  CWInfoLowerPart,
  CWInfoUpperPart,
} from "./ContactWidget.styled";

const ContactWidget = () => {
  // to add space before @
  const email = "sodasoad450 @gmail.com";

  return (
    <WidgetWrapper>
      <CWContainer>
        <WidgetTitleContainer>
          <ConnectWithoutContactOutlinedIcon />
          <WidgetTitle>Contact info</WidgetTitle>
        </WidgetTitleContainer>
        <CWInfo>
          <CWInfoUpperPart>
            <CWInfoBlock>
              <CWLabel>EMAIL</CWLabel>
              <CWValue>{email}</CWValue>
            </CWInfoBlock>
            <CWInfoBlock>
              <CWLabel>MOBILE</CWLabel>
              <CWValue>+380983455570</CWValue>
            </CWInfoBlock>
          </CWInfoUpperPart>
          <CWInfoLowerPart>
            <CWInfoBlock>
              <CWLabel>ADDRESS</CWLabel>
              <CWValue>
                Ukraine, Lviv region, city of Dublyany, Nova Poshta branch #1
              </CWValue>
            </CWInfoBlock>
            <CWInfoBlock>
              <CWLabel>BONUS</CWLabel>
              <CWValue>0</CWValue>
            </CWInfoBlock>
          </CWInfoLowerPart>
        </CWInfo>
      </CWContainer>
    </WidgetWrapper>
  );
};

export default ContactWidget;
