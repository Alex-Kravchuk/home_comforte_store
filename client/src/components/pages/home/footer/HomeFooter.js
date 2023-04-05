import React from "react";
import EndFooter from "./endFooter/EndFooter";
import { FooterWrapper } from "./HomeFooter.styled";
import MailSubscribe from "./mailSubscribe/MailSubscribe";
import MainLinks from "./mainLinks/MainLinks";

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
