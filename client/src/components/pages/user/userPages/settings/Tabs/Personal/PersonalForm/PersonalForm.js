import React from "react";

import { Form } from "antd";

import UploadAvatar from "../UploadAvatar/UploadAvatar";

import { formRules } from "../../../../../../../../helpers/formRules";

import {
  FormTitle,
  FormLabel,
  FormInput,
  FromSubmitButton,
  FormWrapper,
  FormTitleGroup,
} from "../../../../../../../../styles/formComponentStyles";

const PersonalForm = ({
  userData,
  loading,
  onFinishHandler,
  saveFileHandler,
}) => {
  const { name, lastname } = userData ?? {};
  return (
    <FormWrapper>
      <FormTitleGroup>
        <FormTitle>Personal settings</FormTitle>
      </FormTitleGroup>
      <Form
        onFinish={onFinishHandler}
        layout="vertical"
        initialValues={{ name, lastname }}
      >
        <Form.Item label={<FormLabel>Upload avatar</FormLabel>} name="avatar">
          <UploadAvatar saveFileHandler={saveFileHandler} />
        </Form.Item>
        <Form.Item
          name="name"
          label={<FormLabel>First name</FormLabel>}
          rules={formRules.normalInputField("first name")}
        >
          <FormInput />
        </Form.Item>
        <Form.Item
          name="lastname"
          label={<FormLabel>Last name</FormLabel>}
          rules={formRules.normalInputField("last name")}
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
            Save changes
          </FromSubmitButton>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

export default PersonalForm;
