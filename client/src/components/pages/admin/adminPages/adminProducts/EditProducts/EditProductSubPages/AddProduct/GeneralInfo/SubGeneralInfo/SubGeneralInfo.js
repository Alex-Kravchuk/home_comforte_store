import React, { useState, useEffect, useRef } from "react";

import { Form, Select } from "antd";
import { FormLabel } from "@mui/material";

import { formRules } from "../../../../../../../../../../helpers/formRules";

import { InfoBlock } from "../../AddProduct.styled";
import {
  FormInput,
  FormInputNumber,
} from "../../../../../../../../../../styles/formComponentStyles";

const SubGeneralInfo = ({ categories }) => {
  const [types, setTypes] = useState([]);
  const [subtypes, setSubtypes] = useState([]);

  const priceRef = useRef();

  const typesByCategoryIdHandler = (categoryId) => {
    const currentCategoryTypes = categories.filter(
      (category) => category.id === categoryId
    );

    setTypes(currentCategoryTypes[0].types);
  };

  const subtypesByTypeIdHandler = (typeId) => {
    const currentTypeSubtypes = types.filter((type) => type.id === typeId);

    setSubtypes(currentTypeSubtypes[0].subTypes);
  };

  const filterOptionHandler = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const selectOptionsHandler = (dataType) =>
    dataType.map((category) => ({
      value: category.id,
      label: category.name,
    }));

  return (
    <InfoBlock>
      <Form.Item
        name="name"
        label={<FormLabel>Product name:</FormLabel>}
        rules={formRules.normalInputField("product name")}
      >
        <FormInput placeholder="Please input the product name" />
      </Form.Item>

      <Form.Item
        name="price"
        label={<FormLabel>Price:</FormLabel>}
        rules={formRules.numberInput}
      >
        <FormInputNumber min={0} ref={priceRef} />
      </Form.Item>

      <Form.Item>
        <Form.Item
          name="category"
          label={<FormLabel>Category:</FormLabel>}
          style={{ display: "inline-block", width: "calc(33% - 15px)" }}
          rules={formRules.selectInput("category")}
        >
          <Select
            onChange={typesByCategoryIdHandler}
            showSearch
            size="large"
            placeholder="Select a category"
            optionFilterProp="children"
            filterOption={filterOptionHandler}
            options={selectOptionsHandler(categories)}
          />
        </Form.Item>
        <Form.Item
          name="type"
          label={<FormLabel>Type:</FormLabel>}
          rules={formRules.selectInput("type")}
          style={{
            display: "inline-block",
            width: "33%",
            margin: "0 15px",
          }}
        >
          <Select
            onChange={subtypesByTypeIdHandler}
            showSearch
            size="large"
            placeholder="Select a type"
            disabled={types.length < 1}
            optionFilterProp="children"
            filterOption={filterOptionHandler}
            options={selectOptionsHandler(types)}
          />
        </Form.Item>
        <Form.Item
          name="subtype"
          label={<FormLabel>Subtype:</FormLabel>}
          style={{ display: "inline-block", width: "calc(33% - 15px)" }}
          rules={formRules.selectInput("subtype")}
        >
          <Select
            showSearch
            size="large"
            placeholder="Select a subtype"
            disabled={subtypes.length < 1}
            optionFilterProp="children"
            filterOption={filterOptionHandler}
            options={selectOptionsHandler(subtypes)}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item
        name="description"
        rules={formRules.normalInputField("product description")}
        label={<FormLabel>Description:</FormLabel>}
      >
        <FormInput.TextArea
          placeholder="Please input the description"
          autoSize={{ minRows: 4 }}
        />
      </Form.Item>
    </InfoBlock>
  );
};

export default SubGeneralInfo;
