import React from "react";

import { Form } from "antd";

import { LogInButtonContainer, LogInFormWrapper } from "./LogInForm.styled";
import { Link } from "react-router-dom";
import { formRules } from "../../../../../helpers/formRules";
import { FORGOT_PASSWORD_ROUTE } from "../../../../../utils/routes_consts";
import {
  FormLabel,
  FormTitle,
  FormSubTitle,
  FormInput,
  FormPasswordInput,
  FromSubmitButton,
} from "../../../../../styles/formComponentStyles";

const LogInForm = ({ loginForm, submitHandler, loading }) => {
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
          <FromSubmitButton
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
          >
            Log in
          </FromSubmitButton>
          <Link to={"../" + FORGOT_PASSWORD_ROUTE}>Forgot a password?</Link>
        </LogInButtonContainer>
      </Form>
    </LogInFormWrapper>
  );
};

export default LogInForm;
