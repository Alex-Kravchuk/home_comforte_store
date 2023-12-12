import React, { useState, useEffect, useRef } from "react";

import { Form, Select } from "antd";
import { FormLabel } from "@mui/material";
import { formRules } from "../../../../../../../../../../helpers/formRules";
import {
  FormInput,
  FormInputNumber,
} from "../../../../../../../../../../styles/formComponentStyles";
import { InfoBlock } from "../../AddProduct.styled";
import CustomizationSelectBlock from "../../ProductImages/ProductViewerImages/CustomizationSelectBlock";

// TODO
// the price should depend on the selected customization option

const SubGeneralInfo = ({
  categories,
  customizationData,
  customDataHandler,
}) => {
  const [types, setTypes] = useState([]);
  const [subtypes, setSubtypes] = useState([]);

  // these states for select component
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionItem, setSelectedOptionItem] = useState(null);

  const [savedCustomOption, setSavedCustomOption] = useState(false);
  const [selectError, setSelectError] = useState({
    option: false,
    optionItem: false,
  });

  const priceRef = useRef();

  useEffect(() => {
    if (selectedOptionItem) {
      // if selected option item contains price we save it to this component state
      // and to show the icon that indicate about savign it in parrent state
      const optionItemHasPrice = selectedOptionItem.price !== undefined;
      // setImages(selectedOptionItem.viewerImages ?? []);
      setSavedCustomOption(optionItemHasPrice);
    }
  }, [selectedOptionItem]);

  const selectOnChangeHandler = (value) => {
    setSelectedOption(customizationData[value - 1]);
    setSelectedOptionItem(null);
    setSavedCustomOption(false);
  };

  const selectOptionItemHandler = (value) => {
    setSelectedOptionItem(selectedOption.items[value - 1]);
    setSavedCustomOption(false);
  };

  const saveCustomizationValues = () => {
    if (!selectedOption) {
      setSelectError((state) => ({ ...state, option: true }));
      return;
    }

    if (!selectedOptionItem) {
      setSelectError((state) => ({ ...state, optionItem: true }));
      return;
    }

    const selectedOptionItemIndex = selectedOption.items.findIndex(
      (item) => item.id === selectedOptionItem.id
    );

    console.log("====PRICE================================");
    console.log(priceRef.current.value);
    console.log("====================================");

    const selectedOptionItemWithPrice = {
      ...selectedOptionItem,
      price: priceRef.current.value,
    };

    // remove tha save option without images and add with it
    selectedOption.items.splice(
      selectedOptionItemIndex,
      1,
      selectedOptionItemWithPrice
    );

    const customizationModifier = {
      ...selectedOption,
      items: selectedOption.items,
    };

    // debugger
    setSavedCustomOption(true);
    customDataHandler((state) => [...state, customizationModifier]);
    setSelectError({ option: false, optionItem: false });
  };

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

  // TODO
  // Зробити так щоб тимчаосове збереження вимикалось коли вибираєш в селекті і модифікатора і його підпунктів

  return (
    <InfoBlock>
      <Form.Item
        name="name"
        label={<FormLabel>Product name:</FormLabel>}
        rules={formRules.normalInputField("product name")}
      >
        <FormInput placeholder="Please input the product name" />
      </Form.Item>
      <CustomizationSelectBlock
        sizeLarge={true}
        error={selectError}
        saved={savedCustomOption}
        selectedOption={selectedOption}
        customizationData={customizationData}
        saveHandler={saveCustomizationValues}
        selectedOptionItem={selectedOptionItem}
        selectOnChangeHandler={selectOnChangeHandler}
        selectOptionItemHandler={selectOptionItemHandler}
      />

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
