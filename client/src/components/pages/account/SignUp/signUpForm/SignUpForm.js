import React from "react";
import { SignUpFormContainer, SignUpFormWrapper } from "./SignUpForm.styled";
import { Form } from "antd";
import {
  FormInput,
  FormLabel,
  FromSubmitButton,
  FormPasswordInput,
} from "../../Account.styled";
import { formRules } from "../../formRules";

const SignUpForm = () => {
  return (
    <SignUpFormWrapper>
      <SignUpFormContainer>
        <Form name="signup" layout="vertical">
          <Form.Item
            label={<FormLabel>First name</FormLabel>}
            name="first_name"
            rules={formRules}
          >
            <FormInput />
          </Form.Item>
          <Form.Item
            label={<FormLabel>Last Name</FormLabel>}
            name="last_name"
            rules={formRules}
          >
            <FormInput />
          </Form.Item>
          <Form.Item
            label={<FormLabel>Email Address</FormLabel>}
            name="email"
            rules={formRules}
          >
            <FormInput />
          </Form.Item>
          <Form.Item
            label={
              <FormLabel>Password (6 or mote characters, no spaces)</FormLabel>
            }
            name="password"
            rules={formRules}
          >
            <FormPasswordInput />
          </Form.Item>

          <Form.Item
            label={
              <FormLabel>
                Confirm Password (6 or mote characters, no spaces)
              </FormLabel>
            }
            name="confirm_password"
            rules={formRules}
          >
            <FormPasswordInput />
          </Form.Item>

          <Form.Item>
            <FromSubmitButton type="primary" htmlType="submit" size="large">
              Submit
            </FromSubmitButton>
          </Form.Item>
        </Form>
      </SignUpFormContainer>
    </SignUpFormWrapper>
  );
};

export default SignUpForm;
