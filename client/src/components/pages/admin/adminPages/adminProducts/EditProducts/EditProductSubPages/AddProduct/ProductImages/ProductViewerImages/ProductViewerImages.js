import React, { useEffect, useState } from "react";

import { Tooltip } from "antd";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";

import InfoHeader from "../../InfoHeader/InfoHeader";
import CustomizationSelectBlock from "./CustomizationSelectBlock";
import ProductImagesUploading from "../ProductImagesUploading/ProductImagesUploading";

import {
  PVIWrapper,
  PVIContainer,
  PVIHeaderContainer,
  PVIClearFileListContainer,
} from "./ProductViewerImages.styled";

const ProductViewerImages = ({
  clearAllFlag,
  customizationData,
  saveDataHandler,
}) => {
  const [images, setImages] = useState([]);
  const [clearFileListflag, setClearFileList] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionItem, setSelectedOptionItem] = useState(null);

  const [savedCustomOption, setSavedCustomOption] = useState(false);
  const [selectError, setSelectError] = useState({
    option: false,
    optionItem: false,
  });

  useEffect(() => {
    if (selectedOptionItem) {
      // if selected option item contains viewerImages we save it to this component state
      // and to show the icon that indicate about savign it in parrent state
      const selectedOptionItemHasViewerImages =
        selectedOptionItem.viewerImages?.length > 0;

      setImages(selectedOptionItem.viewerImages ?? []);
      setSavedCustomOption(selectedOptionItemHasViewerImages);
    }
  }, [selectedOptionItem]);

  useEffect(() => {
    if (clearAllFlag) {
      setImages([]);
      setClearFileList(true);
      setSelectedOption(null);
      setSavedCustomOption(false);
      setSelectedOptionItem(null);
    }
  }, [clearAllFlag]);

  const saveFileHandler = (file) => {
    setImages((state) => [...state, file]);
  };

  const clearFileList = (wasCleared = false) => {
    setClearFileList(!wasCleared);
    setSelectedOption(null);
    setSelectedOptionItem(null);
  };

  const selectOnChangeHandler = (value) => {
    setSelectedOption(customizationData[value - 1]);
    setSelectedOptionItem(null);
    setSavedCustomOption(false);
  };

  const selectOptionItemHandler = (value) => {
    setSelectedOptionItem(selectedOption.items[value - 1]);
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

    const selectedOptionItemWithImages = {
      ...selectedOptionItem,
      viewerImages: images,
    };

    // remove tha save option without images and add with it
    selectedOption.items.splice(
      selectedOptionItemIndex,
      1,
      selectedOptionItemWithImages
    );

    const customizationModifier = {
      ...selectedOption,
      items: selectedOption.items,
    };

    setSavedCustomOption(true);
    saveDataHandler(customizationModifier);
    setSelectError({ option: false, optionItem: false });
  };

  // check fileList changes handler
  const checkFileListChanges = (fileList) => {
    const differentLength =
      fileList.length !== selectedOptionItem?.viewerImages?.length;

    if (differentLength && fileList.length !== 0) {
      setSavedCustomOption(false);

      if (fileList.length > 0) {
        setImages(fileList.map((item) => item.originalFileObj));
      }
    }
  };
  // console.log("selected images:", images);
  // console.log("saved flag", savedCustomOption, selectedOptionItem);

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
            <Tooltip title="Clear the data" placement="left">
              <DeleteSweepOutlinedIcon />
            </Tooltip>
          </PVIClearFileListContainer>
        </PVIHeaderContainer>

        <CustomizationSelectBlock
          error={selectError}
          saved={savedCustomOption}
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
          checkFileListChanges={checkFileListChanges}
          selectOptionsWasChanged={selectedOptionItem}
          uploadedFileList={
            selectedOptionItem ? selectedOptionItem.viewerImages : null
          }
        />
      </PVIContainer>
    </PVIWrapper>
  );
};

export default ProductViewerImages;
