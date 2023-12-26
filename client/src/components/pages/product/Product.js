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

const Product = ({ generalData, previewMode = false }) => {
  const vieport = useGetWindowSize();
  const bigScreen = vieport.width >= viewport_sizes.xl;

  return (
    <ProductWrapper>
      <ProductContainer>
        <ProudctInfoSection>
          <Demonstration
            previewMode={previewMode}
            generalData={generalData}
          />
          {bigScreen && <Customization previewMode={previewMode} generalData={generalData} />}
        </ProudctInfoSection>
        {!previewMode && <Reviews />}
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Product;
