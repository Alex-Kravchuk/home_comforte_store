import React, { useState } from "react";
import {
  GeneralInfoContainer,
  GeneralInfoWrapper,
  InfoBlock,
  InfoBlockTitle,
} from "./GeneralInfo.styled";
import { Form, Select } from "antd";
import {
  FormInput,
  FormInputNumber,
} from "../../../../../../../../../styles/formComponentStyles";
import { FormLabel } from "@mui/material";
import { useSelector } from "react-redux";
import { formRules } from "../../../../../../../../../helpers/formRules";
import SeatSize from "../../../../../../../product/Demonstration/ProductDetails/SeatSize/SeatSize";

const GeneralInfo = () => {
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

  const filterOptionHandler = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const selectOptionsHandler = (dataType) =>
    dataType.map((category) => ({
      value: category.id,
      label: category.name,
    }));

  return (
    <GeneralInfoWrapper>
      <GeneralInfoContainer>
        <Form layout="vertical">
          <InfoBlock>
			<InfoBlockTitle>General</InfoBlockTitle>
            <Form.Item
              label={<FormLabel>Product name:</FormLabel>}
              rules={formRules.normalInputField("product name")}
            >
              <FormInput />
            </Form.Item>
            <Form.Item
              label={<FormLabel>Price:</FormLabel>}
              rules={formRules.numberInput}
            >
              <FormInputNumber />
            </Form.Item>

            <Form.Item>
              <Form.Item
                label={<FormLabel>Category:</FormLabel>}
                style={{ display: "inline-block", width: "calc(33% - 15px)" }}
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
                label={<FormLabel>Type:</FormLabel>}
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
                label={<FormLabel>Subtype:</FormLabel>}
                style={{ display: "inline-block", width: "calc(33% - 15px)" }}
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
            <Form.Item label={<FormLabel>Description:</FormLabel>}>
              <FormInput.TextArea autoSize={{ minRows: 4 }} />
            </Form.Item>
          </InfoBlock>

          <InfoBlock>
		  <InfoBlockTitle>Dimensions</InfoBlockTitle>
            <SeatSize />
          </InfoBlock>
        </Form>
      </GeneralInfoContainer>
    </GeneralInfoWrapper>
  );
};

export default GeneralInfo;
