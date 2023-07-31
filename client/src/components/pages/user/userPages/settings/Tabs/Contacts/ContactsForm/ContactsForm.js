import React from "react";

import { Form } from "antd";

import { formRules } from "../../../../../../../../helpers/formRules";

import {
  FormInput,
  FormLabel,
  FormTitle,
  FormTitleGroup,
  FormWrapper,
  FromSubmitButton,
} from "../../../../../../../../styles/formComponentStyles";

import { ContactsFormContainer } from "./ContactsForm.styled";

const ContactsForm = ({ formDataHandler, loading, userData }) => {
  const { email, mobile, address } = userData ?? {};
  return (
    <FormWrapper>
      <FormTitleGroup>
        <FormTitle>Contacts settings</FormTitle>
      </FormTitleGroup>

      <ContactsFormContainer>
        <Form
          name="contacts"
          layout="vertical"
          onFinish={formDataHandler}
          initialValues={{
            email,
            mobile,
            address,
          }}
        >
          <Form.Item
            label={<FormLabel>Email</FormLabel>}
            name="email"
            rules={formRules.emailInput}
          >
            <FormInput type="email" />
          </Form.Item>
          <Form.Item
            label={<FormLabel>Mobile</FormLabel>}
            name="mobile"
            rules={formRules.normalInputField("mobile", false)}
          >
            <FormInput />
          </Form.Item>
          <Form.Item
            label={<FormLabel>Address</FormLabel>}
            name="address"
            rules={formRules.normalInputField("address", false)}
          >
            <FormInput />
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
      </ContactsFormContainer>
    </FormWrapper>
  );
};

export default ContactsForm;
