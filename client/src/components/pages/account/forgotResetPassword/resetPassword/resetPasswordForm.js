import React from "react";

import { Form } from "antd";

import { formRules } from "../../../../../helpers/formRules";

import {
  FormLabel,
  FormTitle,
  FormSubTitle,
  FromSubmitButton,
  FormPasswordInput,
  FormWrapper,
} from "../../../../../styles/formComponentStyles";



const ResetPasswordForm = ({ loading, submitHandler }) => {
  return (
    <FormWrapper>
      <FormTitle>Come up with a new password</FormTitle>
      <FormSubTitle>
        Please enter a new password for your account below.
      </FormSubTitle>
      <Form layout="vertical" onFinish={submitHandler}>
        <Form.Item
          name="password"
          rules={formRules.passwordInput}
          label={<FormLabel>New password</FormLabel>}
        >
          <FormPasswordInput />
        </Form.Item>
        <Form.Item
          name="confirm_password"
          rules={formRules.confirmPaswordInput}
          label={<FormLabel>Confirm password</FormLabel>}
        >
          <FormPasswordInput />
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

export default ResetPasswordForm;
