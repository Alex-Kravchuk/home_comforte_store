import React from "react";
import {
  FormInput,
  FormLabel,
  FormSubTitle,
  FormTitle,
  FromSubmitButton,
} from "../../Account.styled";
import { Form } from "antd";

import {
  ForgotPassLink,
  LogInButtonContainer,
  LogInFormWrapper,
} from "./LogInForm.styled";
import { Link } from "react-router-dom";
import { formRules } from "../../formRules";

const LogInForm = ({ submitHandler }) => {
  return (
    <LogInFormWrapper>
      <FormTitle>Log in to your account</FormTitle>
      <FormSubTitle>
        Check your order status, update your billing info, and review past
        purchases.
      </FormSubTitle>
      <Form layout="vertical" onFinish={submitHandler}>
        <Form.Item
          name="email"
          label={<FormLabel>Email</FormLabel>}
          rules={formRules}
        >
          <FormInput />
        </Form.Item>

        <Form.Item
          name="password"
          label={<FormLabel>Password</FormLabel>}
          rules={formRules}
        >
          <FormInput />
        </Form.Item>

        <LogInButtonContainer>
          <FromSubmitButton type="primary" htmlType="submit" size="large">
            Log in
          </FromSubmitButton>
          <Link>Forgot a password?</Link>
        </LogInButtonContainer>
      </Form>
    </LogInFormWrapper>
  );
};

export default LogInForm;
