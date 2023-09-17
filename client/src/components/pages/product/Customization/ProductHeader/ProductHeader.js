import React from "react";

import { Rate } from "antd";

import {
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
    <ProductHeaderWrapper>
      <ProductHeaderContainer>
        <ProductName>Winslow 2-Seat Sofa</ProductName>
        <ProductRating>
          <ProductRatingValue>
            <Rate disabled defaultValue={4}/>
          </ProductRatingValue>
          <ProductRatingNumber>75 reviews</ProductRatingNumber>
        </ProductRating>
        <ProductPrice>$1645 </ProductPrice>
      </ProductHeaderContainer>
    </ProductHeaderWrapper>
  );
};

export default ProductHeader;
