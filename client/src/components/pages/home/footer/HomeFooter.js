import React from "react";

import MainLinks from "./mainLinks/MainLinks";
import EndFooter from "./endFooter/EndFooter";
import MailSubscribe from "./mailSubscribe/MailSubscribe";

import { FooterWrapper } from "./HomeFooter.styled";

const HomeFooter = () => {
  return (
    <FooterWrapper>
      <MailSubscribe />
      <MainLinks />
      <EndFooter />
    </FooterWrapper>
  );
};

export default HomeFooter;
