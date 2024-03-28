import React from "react";
import { Form, Select } from "antd";

import { formRules } from "../../../../../../../../../helpers/formRules";
import UploadImg from "../../../../../../../user/userPages/settings/Tabs/Personal/UploadAvatar/UploadImg";

import {
  FormInput,
  FormLabel,
  FormInputTip,
  FromSubmitButton,
  FormInputWithTipWrapper,
} from "../../../../../../../../../styles/formComponentStyles";

const AddNewTypeForm = ({
  loading,
  categories,
  onSubmitHandler,
  saveFileHandler,
}) => {
  const iconImageHandler = (file) => {
    saveFileHandler((state) => ({ ...state, icon: file }));
  };
  const previewImageHandler = (file) => {
    saveFileHandler((state) => ({ ...state, preview: file }));
  };
  return (
    <Form onFinish={onSubmitHandler} layout="vertical">
      <Form.Item
        name="categoryId"
        label={<FormLabel>Category</FormLabel>}
        rules={formRules.selectInput("category")}
      >
        <Select
          showSearch
          size="large"
          placeholder="Select a category"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={categories.map((category) => ({
            value: category.id,
            label: category.name,
          }))}
        />
      </Form.Item>
      <Form.Item
        name="name"
        label={<FormLabel>Type name </FormLabel>}
        rules={formRules.normalInputField("type")}
      >
        <FormInputWithTipWrapper>
          <FormInput placeholder="Enter type of products name" />
          <FormInputTip>
            Do not exceed 20 characters when entering the product type name.
          </FormInputTip>
        </FormInputWithTipWrapper>
      </Form.Item>
      <Form.Item label={<FormLabel>Upload menu icon</FormLabel>}>
        <UploadImg saveFileHandler={iconImageHandler} />
      </Form.Item>
      <Form.Item label={<FormLabel>Upload preview image</FormLabel>}>
        <UploadImg saveFileHandler={previewImageHandler} />
      </Form.Item>
      <Form.Item>
        <FromSubmitButton
          htmlType="submit"
          size="large"
          type="primary"
          loading={loading}
        >
          Add a new type
        </FromSubmitButton>
      </Form.Item>
    </Form>
  );
};

export default AddNewTypeForm;
