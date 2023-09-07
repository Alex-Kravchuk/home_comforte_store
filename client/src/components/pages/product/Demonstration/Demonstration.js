import React from "react";

import ProductViewer from "../../../../helpers/ProductViewer/ProductViewer";

import { images } from "../../../../helpers/ProductViewer/imagesForTest";

import {
  DemonstrationWrapper,
  DemonstrationContainer,
} from "./Demonstration.styled";

const Demonstration = () => {
  return (
    <DemonstrationWrapper>
      <DemonstrationContainer>
        <ProductViewer images={images} />
      </DemonstrationContainer>
    </DemonstrationWrapper>
  );
};

export default Demonstration;
