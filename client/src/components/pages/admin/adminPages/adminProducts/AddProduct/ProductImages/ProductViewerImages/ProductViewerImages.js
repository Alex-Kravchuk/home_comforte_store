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
  NoImagesErrorText,
} from "./ProductViewerImages.styled";
import { transformObjNamesToString } from "../../../../../../../../helpers/transformObjNamesToString";

const tooltipText = `Here you must upload a minimum of 17 images to view the product.
The product viewer works in 360, so your images should be such
that each image rotates around its own axis. All images should have a
single color background, shadows, etc., so that when scrolling
the image, it appears as if the user is rotating a 3D shapeg
around its axis. You must load the image into at least the first
settings modifier used by default (the first list item in each
selector)`;

const ProductViewerImages = ({
  clearAllFlag,
  saveDataHandler,
  customizationData,
  viewerFiltersData,
  clearFileListHandler,
}) => {
  const [images, setImages] = useState([]);
  const [noImagesError, setNoImagesError] = useState(false);
  const [savedCustomOption, setSavedCustomOption] = useState(false);
  const [currentViewerFilter, setCurrentViewerFilter] = useState({});
  const [currentFilterOptions, setCurrentFilterOptions] = useState({});

  useEffect(() => {
    setCurrentFilterOptions(createCorrectOptionsName());
  }, [customizationData]);

  useEffect(() => {
    const viewerFilter = viewerFiltersData.find(
      (filter) =>
        filter.options === transformObjNamesToString(currentFilterOptions)
    );

    if (viewerFilter) {
      setSavedCustomOption(Boolean(viewerFilter?.images.length !== 0));
      setImages(viewerFilter.images);
      setCurrentViewerFilter(viewerFilter);
    } else {
      setCurrentViewerFilter({});
    }
  }, [currentFilterOptions]);

  useEffect(() => {
    if (clearAllFlag) {
      setSavedCustomOption(false);
    }
  }, [clearAllFlag]);

  const createCorrectOptionsName = () => {
    const currentFilterObject = {};
    customizationData.forEach((mod) => {
      // first of all we check if there is such modifier option in current filter options
      // if it is, we use value from that, if not - default value

      // this case will be usefull when customizationData was updated
      if (currentFilterOptions[mod.name]) {
        currentFilterObject[mod.name] = currentFilterOptions[mod.name];
      } else {
        currentFilterObject[mod.name] = mod.items.find(
          (item) => item.defaultMarker
        ).title;
      }
    });

    return currentFilterObject;
  };

  const saveFileHandler = (file) => {
    setImages((state) => [...state, file]);
  };

  const saveCustomizationValues = () => {
    // block the save action when a small number of images error is seen
    if (images.length === 0 || images.length < 17) {
      setNoImagesError(true);
      return;
    }

    const viewerFilter = {
      options: transformObjNamesToString(currentFilterOptions),
      images,
    };

    setSavedCustomOption(true);
    saveDataHandler(viewerFilter);
  };

  // check fileList changes handler
  const checkFileListChanges = (fileList) => {
    const differentLength =
      fileList.length !== currentViewerFilter?.images?.length;

    if (differentLength && fileList.length !== 0) {
      setNoImagesError(false);
      setSavedCustomOption(false);

      if (fileList.length > 0) {
        setImages(fileList.map((item) => ({ ...item })));
      }
    }
  };

  const optionsOnChangeHandler = (modifierName, value) => {
    setSavedCustomOption(false);
    const newOptions = { ...currentFilterOptions };
    newOptions[modifierName] = value;
    setCurrentFilterOptions(newOptions);
  };

  return (
    <PVIWrapper>
      <PVIContainer>
        <PVIHeaderContainer>
          <InfoHeader tooltipText={<div>{tooltipText}</div>} />
        </PVIHeaderContainer>

        <CustomizationSelectBlock
          saved={savedCustomOption}
          resetToDefault={clearAllFlag}
          customizationData={customizationData}
          saveHandler={saveCustomizationValues}
          optionsOnChangeHandler={optionsOnChangeHandler}
        />
        {noImagesError && (
          <NoImagesErrorText>
            You must upload a minimum of 17 images
          </NoImagesErrorText>
        )}

        <ProductImagesUploading
          uploadType="viewer"
          clearFileListflag={clearAllFlag}
          saveFileHandler={saveFileHandler}
          clearFileListHandler={clearFileListHandler}
          checkFileListChanges={checkFileListChanges}
          selectOptionsWasChanged={currentViewerFilter}
          uploadedFileList={
            currentViewerFilter ? currentViewerFilter.images : null
          }
        />
      </PVIContainer>
    </PVIWrapper>
  );
};

export default ProductViewerImages;
