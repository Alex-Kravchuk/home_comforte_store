import React from "react";

import { Container } from "../../../styles/globalStyles";

import {
  EndFooterWrapper,
  EndFooterLinkItem,
  EndFooterBrandName,
  EndFooterContainer,
  EndFooterIconsContainer,
  EndFooterLinksContainer,
} from "./EndFooter.styled";

const EndFooter = () => {
  return (
    <EndFooterWrapper>
      <Container>
        <EndFooterContainer>
          <EndFooterLinksContainer>
            <EndFooterBrandName>© 2023 Home Comfort Inc.</EndFooterBrandName>
            <EndFooterLinkItem>All rights reserved</EndFooterLinkItem>
            <EndFooterLinkItem>Privacy policy</EndFooterLinkItem>
            <EndFooterLinkItem>Terms of service</EndFooterLinkItem>
            <EndFooterLinkItem>Accessibility</EndFooterLinkItem>
          </EndFooterLinksContainer>
          <EndFooterIconsContainer>
            {/* Can be added some icons*/}
          </EndFooterIconsContainer>
        </EndFooterContainer>
      </Container>
    </EndFooterWrapper>
  );
};

export default EndFooter;
