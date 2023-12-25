import React from "react";

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

const Product = ({ previewMode = false }) => {
  const vieport = useGetWindowSize();
  const bigScreen = vieport.width >= viewport_sizes.xl;

  // const productData = useLocation();


  // console.log('====================================');
  // console.log(productData.state);
  // console.log('====================================');

  return (
    <ProductWrapper>
      <ProductContainer>
        <ProudctInfoSection>
          <Demonstration previewMode={previewMode} />
          {bigScreen && <Customization previewMode={previewMode} />}
        </ProudctInfoSection>
        {!previewMode && <Reviews />}
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Product;
