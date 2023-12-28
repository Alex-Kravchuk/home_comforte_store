import React, { useEffect } from "react";

import Reviews from "./Reviews/Reviews";
import Demonstration from "./Demonstration/Demonstration";
import Customization from "./Customization/Customization";

import {
  ProductWrapper,
  ProductContainer,
  ProudctInfoSection,
} from "./Product.styled";
import { useGetWindowSize } from "../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../utils/viewport_size_consts";
import { useLocation } from "react-router-dom";

const Product = ({
  generalData,
  previewImages,
  customizationData,
  previewMode = false,
}) => {
  const vieport = useGetWindowSize();
  const bigScreen = vieport.width >= viewport_sizes.xl;

  return (
    <ProductWrapper previewMode={previewMode}>
      <ProductContainer>
        <ProudctInfoSection>
          <Demonstration
            previewMode={previewMode}
            generalData={generalData}
            previewImages={previewImages}
          />
          {bigScreen && (
            <Customization
              previewMode={previewMode}
              generalData={generalData}
              customizationData={customizationData}
            />
          )}
        </ProudctInfoSection>
        {!previewMode && <Reviews />}
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Product;
