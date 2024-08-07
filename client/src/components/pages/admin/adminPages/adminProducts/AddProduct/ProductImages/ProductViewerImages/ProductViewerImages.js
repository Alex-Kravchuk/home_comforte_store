import React, { useEffect, useState } from "react";

import { Empty } from "antd";

import InfoHeader from "../../InfoHeader/InfoHeader";
import CustomizationSelectBlock from "./CustomizationSelectBlock";
import ProductImagesUploading from "../ProductImagesUploading/ProductImagesUploading";

import { transformObjNamesToString } from "../../../../../../../../helpers/transformObjNamesToString";

import {
  PVIWrapper,
  PVIContainer,
  NoImagesErrorText,
  PVIHeaderContainer,
} from "./ProductViewerImages.styled";
import { asyncGetBase64 } from "../../../../../../../../helpers/getBase64";

const tooltipText = `Here you must upload 32 images to view the product.
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
  clearViewerFileListHandler,
}) => {
  const [images, setImages] = useState([]);
  const [noImagesError, setNoImagesError] = useState(false);
  const [savedCustomOption, setSavedCustomOption] = useState(false);
  const [currentViewerFilter, setCurrentViewerFilter] = useState({});
  const [localClearFileList, setLocalClearFileList] = useState(false);
  const [currentFilterOptions, setCurrentFilterOptions] = useState({});

  useEffect(() => {
    setCurrentFilterOptions(createCorrectOptionsName());
  }, [customizationData]);

  useEffect(() => {
    setImages([]);

    const viewerFilter = viewerFiltersData.find(
      (filter) =>
        filter.options === transformObjNamesToString(currentFilterOptions)
    );

    if (viewerFilter) {
      setSavedCustomOption(viewerFilter.images.length !== 0);
      setImages(viewerFilter.images);
      setCurrentViewerFilter(viewerFilter);
    } else {
      setCurrentViewerFilter({});
      setSavedCustomOption(false);
    }
  }, [currentFilterOptions]);

  useEffect(() => {
    const fileListForFilterOptionsExist = viewerFiltersData.find(
      (filter) =>
        filter.options === transformObjNamesToString(currentFilterOptions)
    );

    if (!fileListForFilterOptionsExist) {
      setSavedCustomOption(false);
      setLocalClearFileList(true);
    } else {
      setLocalClearFileList(false);
    }
  }, [viewerFiltersData]);

  const createCorrectOptionsName = () => {
    const currentFilterObject = {};
    customizationData.forEach((mod) => {
      // we will ignore modifiers with no affect to display
      if (mod.noAffectToDisplay) {
        return;
      }
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

  const saveCustomizationValues = async () => {
    // block the save action when a small number of images error is seen
    if (images.length === 0 || images.length < 32) {
      setNoImagesError(true);
      return;
    }

    const viewerFilter = {
      options: transformObjNamesToString(currentFilterOptions),
      images: await Promise.all(
        images.map(async ({ originalFileObj }) => ({
          originalFileObj,
          url: await asyncGetBase64(originalFileObj),
        }))
      ),
    };

    setSavedCustomOption(true);
    saveDataHandler(viewerFilter);
  };

  // check fileList changes handler
  const checkFileListChanges = (fileList) => {
    const differentLength =
      fileList.length !== currentViewerFilter?.images?.length;

    // if length i different show indicator that something was changed and update images list
    if (differentLength && fileList.length !== 0) {
      setNoImagesError(false);
      setSavedCustomOption(false);
      if (fileList.length > 0) {
        setImages(fileList.map((item) => ({ ...item })));
      }
    }
  };

  const optionsOnChangeHandler = (modifierName, value) => {
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

        {customizationData.length !== 0 ? (
          <>
            <CustomizationSelectBlock
              saved={savedCustomOption}
              customizationData={customizationData}
              saveHandler={saveCustomizationValues}
              clearFileListHandler={clearViewerFileListHandler}
              currentFilterOptions={transformObjNamesToString(
                currentFilterOptions
              )}
              optionsOnChangeHandler={optionsOnChangeHandler}
            />
            {noImagesError && (
              <NoImagesErrorText>
                You must upload a minimum of 32 images
              </NoImagesErrorText>
            )}

            <ProductImagesUploading
              uploadType="viewer"
              saveFileHandler={saveFileHandler}
              clearFileListHandler={clearFileListHandler}
              checkFileListChanges={checkFileListChanges}
              selectOptionsWasChanged={currentViewerFilter}
              // we can remove the list of files both locally and globally for the entire Image block
              clearFileListflag={localClearFileList || clearAllFlag}
              uploadedFileList={
                currentViewerFilter ? currentViewerFilter.images : null
              }
            />
          </>
        ) : (
          <Empty description="There are no product customization options" />
        )}
      </PVIContainer>
    </PVIWrapper>
  );
};

export default ProductViewerImages;
