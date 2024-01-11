import React, { useEffect, useState } from "react";
import { PIBlock, PIContainer, PIWrapper } from "./ProductImages.styled";
import { InfoBlockTitle } from "../AddProduct.styled";
import ProductViewerImages from "./ProductViewerImages/ProductViewerImages";
import ProductPreviewImages from "./ProductPreviewImages/ProductPreviewImages";
import { Collapse } from "antd";
import TemporarySaveIcon from "../TemporarySaveIcon/TemporarySaveIcon";
import { errorHandlingHelper } from "./errorHandlingHelper";
import { transformObjNamesToString } from "../../../../../../../helpers/transformObjNamesToString";

const ProductImages = ({
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
    resetToDefault();
  }, [customizationData]);

  useEffect(() => {
    console.log("localCustomOptions", localCustomOptions);
  }, [localCustomOptions]);

  const resetToDefault = () => {
    const currentFilters = {};
    customizationData.forEach((mod) => {
      currentFilters[mod.name] = mod.items.find(
        (item) => item.defaultMarker
      ).title;
    });

    setLocalCustomOptions((state) => [
      ...state,
      {
        options: transformObjNamesToString(currentFilters),
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
      // debugger;
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
  const resetImagesDataHandler = () => {
    setClearAllFlag(true);

    setLocalCustomOptions([]);
    setPreviewData([]);
  };

  console.log("clear all flag", clearAllFlag);

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
            clearFileListHandler={setClearAllFlag}
            viewerFiltersData={localCustomOptions}
            saveDataHandler={localSaveDataHandler}
            setDataHandlerFilters={setDataHandlerFilters}
          />
        </PIBlock>
        <PIBlock>
          <InfoBlockTitle>Product images for preview</InfoBlockTitle>
          <ProductPreviewImages
            clearAllFlag={clearAllFlag}
            saveDataHandler={setPreviewData}
            clearFileListHandler={setClearAllFlag}
          />
        </PIBlock>
      </PIContainer>
    </PIWrapper>
  );
};

export default ProductImages;
