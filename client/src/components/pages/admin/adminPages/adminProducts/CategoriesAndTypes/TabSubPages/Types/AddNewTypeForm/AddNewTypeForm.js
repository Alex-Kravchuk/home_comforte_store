import { Form, Select } from "antd";
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

const AddNewTypeForm = ({ loading, onSubmitHandler }) => {
  return (
    <Form onFinish={onSubmitHandler} layout="vertical">
      <Form.Item
        name="category"
        label={<FormLabel>Type name </FormLabel>}
        rules={formRules.normalInputField("type")}
      >
        <FormInputWithTipWrapper>
          <FormInput placeholder="Enter category name" />
          <FormInputTip>
            Do not exceed 20 characters when entering the product name.
          </FormInputTip>
        </FormInputWithTipWrapper>
      </Form.Item>
      <Form.Item
        name="category"
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
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "tom",
              label: "Tom",
            },
          ]}
        />
      </Form.Item>

      <Form.Item>
        <FromSubmitButton
          htmlType="submit"
          size="large"
          type="primary"
          loading={loading}
        >
          Add a new category
        </FromSubmitButton>
      </Form.Item>
    </Form>
  );
};

export default AddNewTypeForm;
