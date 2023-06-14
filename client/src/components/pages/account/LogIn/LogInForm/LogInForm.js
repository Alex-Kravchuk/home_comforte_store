import React, { memo } from "react";
import {
  FormInput,
  FormLabel,
  FormPasswordInput,
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
import { formRules } from "../../../../../helpers/formRules";
import { FORGOT_PASSWORD_ROUTE } from "../../../../../utils/routes_consts";

const LogInForm = memo(({ loginForm, submitHandler }) => {
  return (
    <LogInFormWrapper>
      <FormTitle>Log in to your account</FormTitle>
      <FormSubTitle>
        Check your order status, update your billing info, and review past
        purchases.
      </FormSubTitle>
      <Form layout="vertical" onFinish={submitHandler} form={loginForm}>
        <Form.Item
          name="email"
          label={<FormLabel>Email</FormLabel>}
          rules={formRules.emailInput}
        >
          <FormInput type="email" />
        </Form.Item>

        <Form.Item
          name="password"
          label={<FormLabel>Password</FormLabel>}
          rules={formRules.passwordInput}
        >
          <FormPasswordInput />
        </Form.Item>

        <LogInButtonContainer>
          <FromSubmitButton type="primary" htmlType="submit" size="large">
            Log in
          </FromSubmitButton>
          <Link to={"../" + FORGOT_PASSWORD_ROUTE}>Forgot a password?</Link>
        </LogInButtonContainer>
      </Form>
    </LogInFormWrapper>
  );
});

export default LogInForm;
