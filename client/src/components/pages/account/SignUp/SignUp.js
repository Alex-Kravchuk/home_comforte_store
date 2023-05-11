import React from "react";

import { SignUpContainer, SignUpWrapper } from "./SignUp.styled";
import { FormTitle } from "../Account.styled";
import SignUpForm from "./signUpForm/SignUpForm";

const SignUp = () => {
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
