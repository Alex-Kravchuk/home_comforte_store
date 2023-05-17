import React, { useEffect } from "react";

import { SignUpContainer, SignUpWrapper } from "./SignUp.styled";
import { FormTitle } from "../Account.styled";
import SignUpForm from "./signUpForm/SignUpForm";

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SignUpWrapper>
      <SignUpContainer>
        <FormTitle>Create an account</FormTitle>
        <SignUpForm />
      </SignUpContainer>
    </SignUpWrapper>
  );
};

export default SignUp;
