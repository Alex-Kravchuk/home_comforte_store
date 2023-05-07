import React from "react";

import LogInForm from "./LogInForm/LogInForm";
import OfferCreateAccount from "./offerCreateAccount/OfferCreateAccount";

import { LogInContainer, LogInWrapper } from "./LogIn.styled";

const LogIn = () => {
  const formSubmitHandler = (event) => {
    console.log("form values", event);
  };
  return (
    <LogInWrapper>
      <LogInContainer>
        <LogInForm submitHandler={formSubmitHandler} />
        <OfferCreateAccount />
      </LogInContainer>
    </LogInWrapper>
  );
};

export default LogIn;
