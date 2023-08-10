import React from "react";

import { Form } from "antd";

import { formRules } from "../../../../../helpers/formRules";

import {
  FormLabel,
  FormTitle,
  FormInput,
  FromSubmitButton,
  FormPasswordInput,
  FormWrapper,
  FormTitleGroup,
} from "../../../../../styles/formComponentStyles";

import { SignUpFormContainer } from "./SignUpForm.styled";

const SignUpForm = ({ formDataHandler, loading, signUpForm }) => {
  return (
    <FormWrapper>
      <FormTitleGroup>
        <FormTitle>Create an account</FormTitle>
      </FormTitleGroup>

      <SignUpFormContainer>
        <Form
          name="signup"
          layout="vertical"
          onFinish={formDataHandler}
          form={signUpForm}
        >
          <Form.Item
            label={<FormLabel>First name</FormLabel>}
            name="name"
            rules={formRules.normalInputField("name")}
          >
            <FormInput />
          </Form.Item>
          <Form.Item
            label={<FormLabel>Last Name</FormLabel>}
            name="lastname"
            rules={formRules.normalInputField("last name")}
          >
            <FormInput />
          </Form.Item>
          <Form.Item
            label={<FormLabel>Email Address</FormLabel>}
            name="email"
            rules={formRules.emailInput}
          >
            <FormInput type="email" />
          </Form.Item>
          <Form.Item
            label={
              <FormLabel>Password (6 or more characters, no spaces)</FormLabel>
            }
            name="password"
            rules={formRules.passwordInput}
          >
            <FormPasswordInput />
          </Form.Item>

          <Form.Item
            label={
              <FormLabel>
                Confirm Password (6 or more characters, no spaces)
              </FormLabel>
            }
            name="confirm_password"
            rules={formRules.confirmPaswordInput}
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
      </SignUpFormContainer>
    </FormWrapper>
  );
};

export default SignUpForm;
