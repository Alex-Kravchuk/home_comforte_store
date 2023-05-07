import React from "react";

import MainLinks from "./mainLinks/MainLinks";
import EndFooter from "./endFooter/EndFooter";
import MailSubscribe from "./mailSubscribe/MailSubscribe";

import { FooterWrapper } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <MailSubscribe />
      <MainLinks />
      <EndFooter />
    </FooterWrapper>
  );
};

export default Footer;
