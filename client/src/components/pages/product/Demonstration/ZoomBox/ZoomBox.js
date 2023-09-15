import React from "react";

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import zoom from "../../../../../assets/img/viewer/zoom/zoom.jpg";

import { ZoomImageContainer, ZoomImage } from "./ZoomBox.styled";

const ZoomBox = () => {
  return (
    <TransformWrapper
      initialScale={4}
      maxScale={6}
      minScale={4}
      initialPositionX={-510}
      initialPositionY={-256}
    >
      <TransformComponent>
        <ZoomImageContainer>
          <ZoomImage src={zoom} alt="test" />
        </ZoomImageContainer>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default ZoomBox;
