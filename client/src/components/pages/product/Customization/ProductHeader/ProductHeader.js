import React from "react";

import { Rate } from "antd";

import {
  ProductHeaderCenterWrapper,
  ProductHeaderContainer,
  ProductHeaderWrapper,
  ProductName,
  ProductPrice,
  ProductRating,
  ProductRatingNumber,
  ProductRatingValue,
} from "./ProductHeader.styled";

const ProductHeader = () => {
  return (
    <ProductHeaderCenterWrapper>
      <ProductHeaderWrapper>
        <ProductHeaderContainer>
          <ProductName>Winslow 2-Seat Sofa</ProductName>
          <ProductRating>
            <ProductRatingValue>
              <Rate disabled defaultValue={4} />
            </ProductRatingValue>
            <ProductRatingNumber>75 reviews</ProductRatingNumber>
          </ProductRating>
          <ProductPrice>$1645 </ProductPrice>
        </ProductHeaderContainer>
      </ProductHeaderWrapper>
    </ProductHeaderCenterWrapper>
  );
};

export default ProductHeader;
