import React from "react";
import {
  EndFooterBrandName,
  EndFooterContainer,
  EndFooterIconsContainer,
  EndFooterLinkItem,
  EndFooterLinksContainer,
  EndFooterWrapper,
} from "./EndFooter.styled";

import { Container } from "../../../../../styles/globalStyles";

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
          <EndFooterIconsContainer></EndFooterIconsContainer>
        </EndFooterContainer>
      </Container>
    </EndFooterWrapper>
  );
};

export default EndFooter;
