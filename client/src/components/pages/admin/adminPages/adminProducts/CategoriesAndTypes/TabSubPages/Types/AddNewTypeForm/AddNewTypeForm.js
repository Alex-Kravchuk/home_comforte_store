import { Form, Select, Upload, message } from "antd";
import React from "react";
import {
  FormInput,
  FormInputTip,
  FormInputWithTipWrapper,
  FormLabel,
  FormSelect,
  FromSubmitButton,
} from "../../../../../../../../../styles/formComponentStyles";
import { formRules } from "../../../../../../../../../helpers/formRules";
import UploadAvatar from "../../../../../../../user/userPages/settings/Tabs/Personal/UploadAvatar/UploadImg";

const AddNewTypeForm = ({
  categories,
  loading,
  onSubmitHandler,
  saveFileHandler,
}) => {
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
      <Form.Item label={<FormLabel>Upload image</FormLabel>}>
        <UploadAvatar saveFileHandler={saveFileHandler} />
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
