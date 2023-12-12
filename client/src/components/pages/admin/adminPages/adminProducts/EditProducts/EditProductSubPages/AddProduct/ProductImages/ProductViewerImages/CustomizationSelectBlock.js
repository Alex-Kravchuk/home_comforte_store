import React from "react";

import { Select } from "antd";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import { PVISelectContainer } from "./ProductViewerImages.styled";

const CustomizationSelectBlock = ({
  saved,
  error,
  sizeLarge,
  saveHandler,
  selectedOption,
  customizationData,
  selectedOptionItem,
  selectOnChangeHandler,
  selectOptionItemHandler,
}) => {
  return (
    <PVISelectContainer saved={saved}>
      <Select
        size={sizeLarge ? "large" : "medium"}
        status={error.option && "error"}
        value={
          selectedOption
            ? {
                value: selectedOption.id,
                label: selectedOption.title,
              }
            : null
        }
        onChange={selectOnChangeHandler}
        placeholder="Choose customization option"
        options={customizationData.map((item, index) => ({
          value: item.id,
          label: item.name,
        }))}
      />
      <Select
        size={sizeLarge ? "large" : "medium"}
        status={error.optionItem && "error"}
        value={
          selectedOptionItem
            ? {
                value: selectedOptionItem.id,
                label: selectedOptionItem.title,
              }
            : null
        }
        onChange={selectOptionItemHandler}
        disabled={selectedOption === null}
        placeholder="Choose customization option"
        options={selectedOption?.items.map((item) => ({
          value: item.id,
          label: item.title,
        }))}
      />

      {saved ? (
        <CheckCircleOutlineOutlinedIcon />
      ) : (
        <AddTaskOutlinedIcon onClick={saveHandler} />
      )}
    </PVISelectContainer>
  );
};

export default CustomizationSelectBlock;
