import React from "react";
import { ProductPrevDescriptionContainer, RateBlock } from "./List.styled";
import { Rate } from "antd";

const ProductPrevDescription = ({ price, rating }) => {
  return (
    <ProductPrevDescriptionContainer>
      <div>${price}</div>
      <RateBlock>
        <Rate defaultValue={rating} disabled />
        <span>0 reviews</span>
      </RateBlock>
    </ProductPrevDescriptionContainer>
  );
};

export default ProductPrevDescription;
