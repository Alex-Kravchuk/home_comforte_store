import React, { useEffect, useState } from "react";

import { SignUpContainer, SignUpWrapper } from "./SignUp.styled";
import { FormTitle } from "../Account.styled";
import SignUpForm from "./signUpForm/SignUpForm";
import { Form } from "antd";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const signUpFormFinishHandler = (values) => {
    form.resetFields();
    console.log("sign up", values);
  };

  return (
    <SignUpWrapper>
      <SignUpContainer>
        <FormTitle>Create an account</FormTitle>
        <SignUpForm
          formDataHandler={signUpFormFinishHandler}
          signUpForm={form}
        />
      </SignUpContainer>
    </SignUpWrapper>
  );
};

export default SignUp;
