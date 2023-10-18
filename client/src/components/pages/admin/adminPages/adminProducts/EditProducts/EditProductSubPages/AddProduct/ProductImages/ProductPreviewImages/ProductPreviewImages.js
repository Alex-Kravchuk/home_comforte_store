import React from "react";
import { PPIContainer, PPIWrapper } from "./ProductPreviewImages.styled";
import InfoHeader from "../../InfoHeader/InfoHeader";
import ProductImagesUploading from "../ProductImagesUploading/ProductImagesUploading";

const ProductPreviewImages = () => {
  const saveFileHandler = () => {};
  return (
    <PPIWrapper>
      <PPIContainer>
        <InfoHeader tooltipText="Here you should upload 2-4 images of your product from the real world (how it looks at home). You can also add a caption to each photo. Please use images that give the user the impression of the product as clearly as possible." />
      </PPIContainer>
      <ProductImagesUploading saveFileHandler={saveFileHandler} />
    </PPIWrapper>
  );
};

export default ProductPreviewImages;
