import React from "react";

import {
  PVPreviewImg,
  PVPreviewImgContainer,
  PVPreviewImagesWrapper,
  PVPreviewImagesContainer,
} from "./ProductViewer.styled";

const ProductViewerThumbnails = ({
  thumbnails,
  selectedPreviewID,
  selectPreviewHandlerByClick,
}) => {
  return (
    <PVPreviewImagesWrapper>
      <PVPreviewImagesContainer>
        {thumbnails.map((img) => (
          <PVPreviewImgContainer
            key={img.id}
            selected={img.id === selectedPreviewID}
            onClick={() => selectPreviewHandlerByClick(img.id)}
          >
            <PVPreviewImg src={img.src} />
          </PVPreviewImgContainer>
        ))}
      </PVPreviewImagesContainer>
    </PVPreviewImagesWrapper>
  );
};

export default ProductViewerThumbnails;
