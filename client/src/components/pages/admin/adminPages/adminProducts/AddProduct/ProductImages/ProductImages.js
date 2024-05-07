import React, { useEffect, useState } from "react";

import TemporarySaveIcon from "../TemporarySaveIcon/TemporarySaveIcon";
import ProductViewerImages from "./ProductViewerImages/ProductViewerImages";
import ProductPreviewImages from "./ProductPreviewImages/ProductPreviewImages";

import { errorHandlingHelper } from "./errorHandlingHelper";
import { createDefaultFilters } from "./createDefaultFilters";
import { transformObjNamesToString } from "../../../../../../../helpers/transformObjNamesToString";

import { InfoBlockTitle } from "../AddProduct.styled";
import { PIBlock, PIContainer, PIWrapper } from "./ProductImages.styled";

const ProductImages = ({
  resetFields,
  customizationData,
  setDataHandlerPreview,
  setDataHandlerFilters,
}) => {
  const [imagesError, setImagesError] = useState(false);
  const [clearAllFlag, setClearAllFlag] = useState(false);
  const [temporarilySaved, setTemporarilySaved] = useState(false);

  // the preview data is independent of the customization data
  const [previewData, setPreviewData] = useState();
  const [localCustomOptions, setLocalCustomOptions] = useState([]);

  useEffect(() => {
    if (resetFields) {
      setPreviewData([]);
      setClearAllFlag(true);
      setLocalCustomOptions([]);
      setTemporarilySaved(false);
    }
  }, [resetFields]);

  useEffect(() => {
    resetToDefault();
  }, [customizationData]);

  const resetToDefault = () => {
    const defaultFilters = createDefaultFilters(customizationData);

    setLocalCustomOptions((state) => [
      ...state,
      {
        options: transformObjNamesToString(defaultFilters),
        images: [],
      },
    ]);
  };

  const saveDataHandler = () => {
    const error = errorHandlingHelper(
      customizationData,
      localCustomOptions,
      previewData
    );

    if (error) {
      setImagesError(error);
      return;
    }

    setDataHandlerFilters(localCustomOptions);
    setDataHandlerPreview(previewData);
    setTemporarilySaved(true);
    setImagesError(false);
  };

  const localSaveDataHandler = (newViewerOptions) => {
    const changedViewerIndex = localCustomOptions.findIndex(
      (viewer) => viewer.options === newViewerOptions.options
    );

    // it's need for first item in options list, because the first element is created before the images are loaded
    // so we find it in list and change it to new item with images
    if (changedViewerIndex >= 0) {
      const copy = localCustomOptions.concat();
      copy.splice(changedViewerIndex, 1, newViewerOptions);

      setLocalCustomOptions(copy);
    } else {
      setLocalCustomOptions((state) => [...state, newViewerOptions]);
    }

    if (temporarilySaved) {
      setTemporarilySaved(false);
    }
  };

  const resetViewerImagesHandler = (filter) => {
    setLocalCustomOptions((state) =>
      state.filter((opt) => opt.options !== filter)
    );
  };

  const resetImagesDataHandler = () => {
    setPreviewData([]);
    setClearAllFlag(true);
    setLocalCustomOptions([]);
    setDataHandlerPreview([]);
  };

  return (
    <PIWrapper>
      <PIContainer>
        <TemporarySaveIcon
          error={imagesError}
          saveDataHandler={saveDataHandler}
          temporarySaveFlag={temporarilySaved}
          resetDataHandler={resetImagesDataHandler}
          temporarilySaveHandler={setTemporarilySaved}
        />
        <PIBlock>
          <InfoBlockTitle>Product images to view</InfoBlockTitle>
          <ProductViewerImages
            clearAllFlag={clearAllFlag}
            customizationData={customizationData}
            viewerFiltersData={localCustomOptions}
            saveDataHandler={localSaveDataHandler}
            clearFileListHandler={setClearAllFlag}
            setDataHandlerFilters={setDataHandlerFilters}
            clearViewerFileListHandler={resetViewerImagesHandler}
          />
        </PIBlock>
        <PIBlock>
          <InfoBlockTitle>Product images for preview</InfoBlockTitle>
          <ProductPreviewImages
            clearAllFlag={clearAllFlag}
            saveDataHandler={setPreviewData}
            clearFileListHandler={setClearAllFlag}
            temporarilySaveHandler={setTemporarilySaved}
          />
        </PIBlock>
      </PIContainer>
    </PIWrapper>
  );
};

export default ProductImages;
