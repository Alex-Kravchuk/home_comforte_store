import React from "react";
import {
  CustomIntput,
  MailSubscribeContainer,
  MailSubscribeInputContainer,
  MailSubscribeSubmitBtn,
  MailSubscribeSubTitle,
  MailSubscribeTitle,
  MailSubscribeTitlesContainer,
  MailSubscribeWrapper,
} from "./MailSubscribe.styled";

import { Container } from "../../../../../styles/globalStyles";

const MailSubscribe = () => {
  return (
    <MailSubscribeWrapper>
      <Container>
        <MailSubscribeContainer>
          <MailSubscribeTitlesContainer>
            <MailSubscribeTitle>Join our mailing list</MailSubscribeTitle>
            <MailSubscribeSubTitle>
              Sign up with your email to receive updates and interesting offers
              from our team.
            </MailSubscribeSubTitle>
          </MailSubscribeTitlesContainer>

          <MailSubscribeInputContainer>
            <CustomIntput type="email" placeholder="Please, input your email" />
            <MailSubscribeSubmitBtn>Sign up</MailSubscribeSubmitBtn>
          </MailSubscribeInputContainer>
        </MailSubscribeContainer>
      </Container>
    </MailSubscribeWrapper>
  );
};

export default MailSubscribe;
