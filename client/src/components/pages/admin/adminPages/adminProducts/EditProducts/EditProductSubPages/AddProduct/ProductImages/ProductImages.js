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
  const [imagesError, setImagesError] = useState(false);
  const [temporarilySaved, setTemporarilySaved] = useState(false);

  const [localCustomOptions, setLocalCustomOption] = useState([]);

  useEffect(() => {
    setLocalCustomOption(customizationData.concat());
  }, []);

  const saveDataHandler = () => {
    setDataHandlerViewer(localCustomOptions);
  };

  const localSaveDataHandler = (newModifier) => {
    const changedModifierIndex = localCustomOptions.findIndex(
      (option) => option.id === newModifier.id
    );

    console.log('suk', newModifier);
    
    const newLocalCustomOptions = localCustomOptions
      .concat()
      .splice(changedModifierIndex, 1, newModifier);

    setLocalCustomOption(newLocalCustomOptions);
  };
  const resetImagesDataHandler = () => {};

  console.log("local state modifiers:", localCustomOptions);

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
