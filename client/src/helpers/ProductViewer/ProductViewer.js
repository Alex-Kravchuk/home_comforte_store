import React, { useState } from "react";
import {
  PVWrapper,
  PVContainer,
  PVPreviewImg,
  PVMainImgContainer,
  PVPreviewImgContainer,
  PVCurrentImg,
  PVCurrentImgContainer,
  ViewerField,
} from "./ProductViewer.styled";

import { images } from "./imagesForTest";

const ProductViewer = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const [drag, setDrag] = useState(false);

  /**
   *
   * @function touchHandler
   * @function mouseMoveHandler
   * these functions handle scrolling over the viewer when viewer clicked (drag event)
   * using the width of the image container here calculates
   * the index of each image to be displayed
   */

  const touchHandler = (e) => {
    if (!drag) return;
    const { target } = e;

    const coefficient = target.clientWidth / images.length;
    const xCordinate = e.touches[0].clientX;

    const index = Math.trunc(xCordinate / coefficient);

    if (index > images.length - 1) {
      setCurrentImg(0);
      return;
    }

    setCurrentImg(index);
  };

  const mouseMoveHandler = (e) => {
    if (!drag) return;
    const { target, nativeEvent } = e;
    const coefficient = target.clientWidth / images.length;

    const index = Math.trunc(nativeEvent.offsetX / coefficient);
    if (index > images.length - 1) {
      setCurrentImg(0);
      return;
    }

    setCurrentImg(index);
  };

  return (
    <PVWrapper>
      <PVContainer>
        <PVMainImgContainer>
          <PVCurrentImgContainer>
            <PVCurrentImg src={images[currentImg]} />
          </PVCurrentImgContainer>
          <ViewerField
            onTouchStart={() => setDrag(true)}
            onTouchEnd={() => setDrag(false)}
            onTouchMove={touchHandler}
            onMouseDown={(e) => {
              e.preventDefault();
              setDrag(true);
            }}
            onMouseUp={(e) => {
              setDrag(false);
            }}
            onMouseMove={mouseMoveHandler}
          ></ViewerField>
        </PVMainImgContainer>
        <PVPreviewImgContainer>
          {images.map((img) => (
            <PVPreviewImg key={img} src={img} selected={images} />
          ))}
        </PVPreviewImgContainer>
      </PVContainer>
    </PVWrapper>
  );
};

export default ProductViewer;
