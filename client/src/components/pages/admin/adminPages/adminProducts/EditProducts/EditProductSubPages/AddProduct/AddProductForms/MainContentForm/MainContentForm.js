import { Form, Select } from "antd";
import React, { useState } from "react";
import {
  FormInput,
  FormLabel,
  FormSelect,
} from "../../../../../../../../../../styles/formComponentStyles";
import { useSelector } from "react-redux";
import { AddProductFormBlock, AddProductFormBlockTitle } from "../../AddProduct.styled";

const MainContentForm = () => {
  const { data: categories } = useSelector((state) => state.menuData);
  const [types, setTypes] = useState([]);
  const [subtypes, setSubtypes] = useState([]);

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
  return (
    <Form layout="vertical">
      <AddProductFormBlock>
		<AddProductFormBlockTitle>General info</AddProductFormBlockTitle>
        <Form.Item label={<FormLabel>Product name</FormLabel>}>
          <FormInput />
        </Form.Item>
        <Form.Item label={<FormLabel>Category</FormLabel>}>
          <Select
            onChange={typesByCategoryIdHandler}
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
        <Form.Item label={<FormLabel>Type</FormLabel>}>
          <Select
            onChange={subtypesByTypeIdHandler}
            showSearch
            size="large"
            placeholder="Select a type"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={types.map((category) => ({
              value: category.id,
              label: category.name,
            }))}
          />
        </Form.Item>
        <Form.Item label={<FormLabel>Category</FormLabel>}>
          <Select
            showSearch
            size="large"
            placeholder="Select a category"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={subtypes.map((category) => ({
              value: category.id,
              label: category.name,
            }))}
          />
        </Form.Item>
		
      </AddProductFormBlock>
    </Form>
  );
};

export default MainContentForm;
