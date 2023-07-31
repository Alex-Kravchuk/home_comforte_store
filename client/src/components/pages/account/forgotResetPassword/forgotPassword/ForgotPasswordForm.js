import React from "react";

import { Form } from "antd";

import { formRules } from "../../../../../helpers/formRules";

import {
  FormLabel,
  FormInput,
  FormTitle,
  FormSubTitle,
  FromSubmitButton,
  FormWrapper,
  FormTitleGroup,
} from "../../../../../styles/formComponentStyles";

const ForgotPasswordForm = ({ loading, submitHandler }) => {
  return (
    <FormWrapper>
      <FormTitleGroup>
        <FormTitle>Reset your password</FormTitle>
        <FormSubTitle>
          Please enter your email address below. You will receive a link to
          reset your password.
        </FormSubTitle>
      </FormTitleGroup>

      <Form layout="vertical" onFinish={submitHandler}>
        <Form.Item
          name="email"
          rules={formRules.emailInput}
          label={<FormLabel>Email address</FormLabel>}
        >
          <FormInput type="email" />
        </Form.Item>
        <Form.Item>
          <FromSubmitButton
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
          >
            Submit
          </FromSubmitButton>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

export default ForgotPasswordForm;
