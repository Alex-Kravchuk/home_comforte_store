import React, { useState } from "react";

import { Tooltip } from "antd";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";

import InfoHeader from "../../InfoHeader/InfoHeader";
import CustomizationSelectBlock from "./CustomizationSelectBlock";
import ProductImagesUploading from "../ProductImagesUploading/ProductImagesUploading";

import {
  PVIWrapper,
  PVIContainer,
  PVIHeaderContainer,
  PVISelectContainer,
  PVIClearFileListContainer,
} from "./ProductViewerImages.styled";

const ProductViewerImages = ({ customizationData }) => {
  const [images, setImages] = useState([]);
  const [clearFileListflag, setClearFileList] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionItem, setSelectedOptionItem] = useState(null);

  const [saveCustomOption, setSaveCustomOption] = useState(false);

  const saveFileHandler = (file) => {
    setImages((state) => [...state, file]);
  };

  const clearFileList = (wasCleared = false) => {
    setClearFileList(!wasCleared);
  };

  const selectOnChangeHandler = (value) => {
    setSaveCustomOption(false);
    setSelectedOption(customizationData[value - 1]);
    setSelectedOptionItem(null);
  };

  const selectOptionItemHandler = (value) => {
    setSaveCustomOption(false);
    setSelectedOptionItem(selectedOption.items[value - 1]);
  };

  const saveCustomizationValues = () => {
    setSaveCustomOption(true);
  };

  console.log(
    "selected option:",
    selectedOption,
    "selected option item:",
    selectedOptionItem
  );

  return (
    <PVIWrapper>
      <PVIContainer>
        <PVIHeaderContainer>
          <InfoHeader
            tooltipText={
              <div>
                Here you must upload a minimum of 16 images to view the product.
                The product viewer works in 360, so your images should be such
                that each image rotates around its own axis (you can
                <a> click here</a> to see an example). All images should have a
                single color background, shadows, etc., so that when scrolling
                the image, it appears as if the user is rotating a 3D shape
                around its axis.
              </div>
            }
          />
          <PVIClearFileListContainer onClick={clearFileList}>
            <Tooltip title="Clear the file list" placement="left">
              <DeleteSweepOutlinedIcon />
            </Tooltip>
          </PVIClearFileListContainer>
        </PVIHeaderContainer>

        <CustomizationSelectBlock
          saved={saveCustomOption}
          selectedOption={selectedOption}
          customizationData={customizationData}
          saveHandler={saveCustomizationValues}
          selectedOptionItem={selectedOptionItem}
          selectOnChangeHandler={selectOnChangeHandler}
          selectOptionItemHandler={selectOptionItemHandler}
        />
        <ProductImagesUploading
          uploadType="viewer"
          saveFileHandler={saveFileHandler}
          clearFileListflag={clearFileListflag}
          clearFileListHandler={setClearFileList}
        />
      </PVIContainer>
    </PVIWrapper>
  );
};

export default ProductViewerImages;
