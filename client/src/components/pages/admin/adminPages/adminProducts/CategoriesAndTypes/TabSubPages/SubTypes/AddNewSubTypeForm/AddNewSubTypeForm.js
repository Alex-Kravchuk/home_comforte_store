import { Form, Select } from "antd";
import React, { useState } from "react";
import {
  FormInput,
  FormInputTip,
  FormInputWithTipWrapper,
  FormLabel,
  FromSubmitButton,
} from "../../../../../../../../../styles/formComponentStyles";
import { formRules } from "../../../../../../../../../helpers/formRules";

const AddNewSubTypeForm = ({ categories, loading, onSubmitHandler }) => {
  const [types, setTypes] = useState([]);
  const handleTypesByCategoryId = (categoryId) => {
    console.log("category sub type");
    const currentCategoryTypes = categories.filter(
      (category) => category.id === categoryId
    );

    // debugger;
    console.log("asdsad", currentCategoryTypes);

    setTypes(currentCategoryTypes[0].types);
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
          onChange={handleTypesByCategoryId}
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
        name="typeId"
        label={<FormLabel>Type</FormLabel>}
        rules={formRules.selectInput("type")}
      >
        <Select
          showSearch
          size="large"
          placeholder="Select a type"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={types.map((type) => ({
            value: type.id,
            label: type.name,
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
            Do not exceed 20 characters when entering the product subtype name.
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
          Add a new type
        </FromSubmitButton>
      </Form.Item>
    </Form>
  );
};

export default AddNewSubTypeForm;
