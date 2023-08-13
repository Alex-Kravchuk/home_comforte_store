import React from "react";
import { Form } from "antd";

import { formRules } from "../../../../../../../../../helpers/formRules";

import {
  FormInput,
  FormLabel,
  FormInputTip,
  FromSubmitButton,
  FormInputWithTipWrapper,
} from "../../../../../../../../../styles/formComponentStyles";

const AddNewCategoryForm = ({ loading, onSubmitHandler }) => {
  return (
    <Form layout="vertical" onFinish={onSubmitHandler}>
      <Form.Item
        name="category"
        label={<FormLabel>Category name </FormLabel>}
        rules={formRules.normalInputField("category name")}
      >
        <FormInputWithTipWrapper>
          <FormInput placeholder="Enter category name" />
          <FormInputTip>
            Do not exceed 20 characters when entering the product name.
          </FormInputTip>
        </FormInputWithTipWrapper>
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

export default AddNewCategoryForm;
