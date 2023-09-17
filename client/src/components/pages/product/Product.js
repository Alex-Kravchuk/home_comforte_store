import React from "react";

import Reviews from "./Reviews/Reviews";
import Demonstration from "./Demonstration/Demonstration";
import Customization from "./Customization/Customization";

import {
  ProductWrapper,
  ProductContainer,
  ProudctInfoSection,
} from "./Product.styled";

const Product = () => {
  return (
    <ProductWrapper>
      <ProductContainer>
        <ProudctInfoSection>
          <Demonstration />
          <Customization />
        </ProudctInfoSection>
        <Reviews />
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Product;
