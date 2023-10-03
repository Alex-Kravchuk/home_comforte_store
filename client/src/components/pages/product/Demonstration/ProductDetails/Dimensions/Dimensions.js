import React from "react";

import example from "../../../../../../assets/img/viewer/dimension/dimension_example.webp";

import {
  DimensionsWrapper,
  DimensionsContainer,
  DimensionsImage,
} from "./Dimensions.styled";

const Dimensions = () => {
  return (
    <DimensionsWrapper>
      <DimensionsContainer>
        <DimensionsImage src={example} alt="dimensions" />
      </DimensionsContainer>
    </DimensionsWrapper>
  );
};

export default Dimensions;
