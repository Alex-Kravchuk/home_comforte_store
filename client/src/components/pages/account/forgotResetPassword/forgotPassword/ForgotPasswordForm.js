import React, { memo } from "react";

import { Form } from "antd";

import { formRules } from "../../../../../helpers/formRules";

import {
  FormInput,
  FormLabel,
  FormWrapper,
  FormContainer,
  FromSubmitButton,
} from "../../Account.styled";

const ForgotPasswordForm = memo(({ submitHandler }) => {
  return (
    <FormWrapper>
      <FormContainer>
        <Form layout="vertical" onFinish={submitHandler}>
          <Form.Item
            name="email"
            rules={formRules.emailInput}
            label={<FormLabel>Email address</FormLabel>}
          >
            <FormInput type="email" />
          </Form.Item>
          <Form.Item>
            <FromSubmitButton type="primary" htmlType="submit" size="large">
              Submit
            </FromSubmitButton>
          </Form.Item>
        </Form>
      </FormContainer>
    </FormWrapper>
  );
});

export default ForgotPasswordForm;
