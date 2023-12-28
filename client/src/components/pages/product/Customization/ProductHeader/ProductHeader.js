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

const ProductHeader = ({ name, price, rating = 0, reviewsNumber = 0 }) => {
  return (
    <ProductHeaderCenterWrapper>
      <ProductHeaderWrapper>
        <ProductHeaderContainer>
          <ProductName>{name ? name : "The name is not set"}</ProductName>
          <ProductRating>
            <ProductRatingValue>
            <Rate disabled defaultValue={rating} />
            </ProductRatingValue>
            <ProductRatingNumber>{reviewsNumber} reviews</ProductRatingNumber>
          </ProductRating>
          <ProductPrice>${price ? price : "00000"}</ProductPrice>
        </ProductHeaderContainer>
      </ProductHeaderWrapper>
    </ProductHeaderCenterWrapper>
  );
};

export default ProductHeader;
