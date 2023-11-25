import React, { useState } from "react";
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

  const saveImagesDataHandler = () => {};
  const resetImagesDataHandler = () => {};

  return (
    <PIWrapper>
      <PIContainer>
        <TemporarySaveIcon
          error={imagesError}
          temporarySaveFlag={temporarilySaved}
          saveDataHandler={saveImagesDataHandler}
          resetDataHandler={resetImagesDataHandler}
          temporarilySaveHandler={setTemporarilySaved}
        />
        <PIBlock>
          <InfoBlockTitle>Product images to view</InfoBlockTitle>
          <ProductViewerImages customizationData={customizationData} />
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
