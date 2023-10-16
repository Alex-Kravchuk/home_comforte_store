import React, { useState } from "react";

import InfoHeader from "../../InfoHeader/InfoHeader";
import ProductImagesUploading from "../ProductImagesUploading/ProductImagesUploading";

import { PVIContainer, PVIWrapper } from "./ProductViewerImages.styled";

const ProductViewerImages = () => {
  const [images, setImages] = useState([]);

  const saveFileHandler = (file) => {
    setImages(file);
  };
  return (
    <PVIWrapper>
      <PVIContainer>
        <InfoHeader
          tooltipText={
            <div>
              Here you must upload a minimum of 16 images to view the product.
              The product viewer works in 360, so your images should be such
              that each image rotates around its own axis (you can 
               <a> click here</a> to see an example). All images should have a
              single color background, shadows, etc., so that when scrolling the
              image, it appears as if the user is rotating a 3D shape around its
              axis.
            </div>
          }
        />
      </PVIContainer>
      <ProductImagesUploading
        moreThanOne={true}
        saveFileHandler={saveFileHandler}
      />
    </PVIWrapper>
  );
};

export default ProductViewerImages;
