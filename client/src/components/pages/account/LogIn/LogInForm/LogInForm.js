import React from "react";
import { FormsSubTitle, FormsTitle } from "../../Account.styled";
import { Form } from "antd";
import { LogInButton, LogInFormInput } from "../LogIn.styled";
import { LogInFormWrapper } from "./LogInForm.styled";

const LogInForm = ({ submitHandler }) => {
  return (
    <LogInFormWrapper>
      <FormsTitle>Log in to your account</FormsTitle>
      <FormsSubTitle>
        Check your order status, update your billing info, and review past
        purchases.
      </FormsSubTitle>
      <Form layout="vertical" onFinish={submitHandler}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <LogInFormInput />
        </Form.Item>

        <Form.Item
          name="password"
          label="Passowrd"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <LogInFormInput />
        </Form.Item>

        <LogInButton type="primary" htmlType="submit" size="large">
          Log in
        </LogInButton>
      </Form>
    </LogInFormWrapper>
  );
};

export default LogInForm;
