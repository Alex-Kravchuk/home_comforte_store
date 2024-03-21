import React from "react";
import Product from "../Product";

import { PPPWrapper } from "./PreviewProductPage.styled";

const PreviewProductPage = ({
  generalData,
  previewImages,
  customizationData,
  viewerFiltersData,
}) => {
  return (
    <PPPWrapper>
      <h2>This is a preview page for an upcoming product</h2>
      <h4>
        If everything is correct, below you should confirm the addition of the
        product
      </h4>

      <Product
        previewMode={true}
        generalData={generalData}
        previewImages={previewImages}
        customizationData={customizationData}
        viewerFiltersData={viewerFiltersData}
      />
    </PPPWrapper>
  );
};

export default PreviewProductPage;
