import React, { useEffect, useState } from "react";
import { PIBlock, PIContainer, PIWrapper } from "./ProductImages.styled";
import { InfoBlockTitle } from "../AddProduct.styled";
import ProductViewerImages from "./ProductViewerImages/ProductViewerImages";
import ProductPreviewImages from "./ProductPreviewImages/ProductPreviewImages";
import { Collapse } from "antd";
import TemporarySaveIcon from "../TemporarySaveIcon/TemporarySaveIcon";

const ProductImages = ({
  customizationData,
  setDataHandlerViewer,
  setDataHandlerPreview,
}) => {
  const [localCustomOptions, setLocalCustomOptions] = useState([]);

  const [imagesError, setImagesError] = useState(false);
  const [clearAllFlag, setClearAllFlag] = useState(false);
  const [temporarilySaved, setTemporarilySaved] = useState(false);

  useEffect(() => {
    setLocalCustomOptions(customizationData.concat());
  }, []);

  const saveDataHandler = () => {
    setDataHandlerViewer(localCustomOptions);
    setTemporarilySaved(true);
  };

  const localSaveDataHandler = (newModifier) => {
    const changedModifierIndex = localCustomOptions.findIndex(
      (option) => option.id === newModifier.id
    );

    localCustomOptions.splice(changedModifierIndex, 1, newModifier);
    setLocalCustomOptions(localCustomOptions);
  };
  const resetImagesDataHandler = () => {
    setClearAllFlag(true);

    // we remove only viewerImages from it
    const localStateWithoutImages = localCustomOptions.map((customOption) => {
      customOption.items.forEach((element) => {
        if (Object.hasOwn(element, "viewerImages")) {
          delete element.viewerImages;
        }
      });

      return customOption;
    });

    setDataHandlerViewer(localStateWithoutImages);
  };

  return (
    <PIWrapper>
      <PIContainer>
        <TemporarySaveIcon
          error={imagesError}
          temporarySaveFlag={temporarilySaved}
          saveDataHandler={saveDataHandler}
          resetDataHandler={resetImagesDataHandler}
          temporarilySaveHandler={setTemporarilySaved}
        />
        <PIBlock>
          <InfoBlockTitle>Product images to view</InfoBlockTitle>
          <ProductViewerImages
            clearAllFlag={clearAllFlag}
            customizationData={customizationData}
            saveDataHandler={localSaveDataHandler}
          />
        </PIBlock>
        <PIBlock>
          <InfoBlockTitle>Product images for preview</InfoBlockTitle>
          <ProductPreviewImages />
        </PIBlock>
      </PIContainer>
    </PIWrapper>
  );
};

export default ProductImages;
