import React from "react";

import example from "../../../../../../assets/img/viewer/dimension/dimension_example.webp";

import {
  DimensionsWrapper,
  DimensionsContainer,
  DimensionsImage,
  DimensionsDescr,
  DescrHeader,
  DescrContent,
} from "./Dimensions.styled";

const Dimensions = () => {
  return (
    <DimensionsWrapper>
      <DimensionsContainer>
        <DimensionsImage src={example} alt="dimensions" />
        <DimensionsDescr>
          <DescrHeader>How we measure</DescrHeader>
          <DescrContent>
            Our furniture measurements are calculated from each piece’s widest
            or tallest points. Cushion overhang beyond the frame, the crown
            (highest point) on a fully fluffed seat cushion, and outward curves
            and angles are all included in the overall dimensions.
          </DescrContent>
        </DimensionsDescr>
      </DimensionsContainer>
    </DimensionsWrapper>
  );
};

export default Dimensions;
