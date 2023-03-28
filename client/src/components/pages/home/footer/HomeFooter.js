import React from "react";
import { FooterWrapper } from "./HomeFooter.styled";
import MailSubscribe from "./mailSubscribe/MailSubscribe";
import MainLinks from "./mainLinks/MainLinks";

const HomeFooter = () => {
  return (
    <FooterWrapper>
      <MailSubscribe />
      <MainLinks />
    </FooterWrapper>
  );
};

export default HomeFooter;
