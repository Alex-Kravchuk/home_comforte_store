import React, { memo } from "react";
import {
  FormContainer,
  FormLabel,
  FormPasswordInput,
  FormWrapper,
  FromSubmitButton,
} from "../../Account.styled";
import { Form } from "antd";
import { formRules } from "../../../../../helpers/formRules";

const ResetPasswordForm = memo(({ submitHandler }) => {
  return (
    <FormWrapper>
      <FormContainer>
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
            <FromSubmitButton type="primary" htmlType="submit" size="large">
              Submit
            </FromSubmitButton>
          </Form.Item>
        </Form>
      </FormContainer>
    </FormWrapper>
  );
});

export default ResetPasswordForm;
