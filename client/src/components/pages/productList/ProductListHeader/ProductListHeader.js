import React from "react";
import {
  PLHeaderContainer,
  PLHeaderItemNumbers,
  PLHeaderSortingContainer,
  PLHeaderSubTitle,
  PLHeaderTitle,
  PLTitlesContainer,
  SelectLabel,
} from "./ProductListHeader.styled";
import { Select } from "antd";

const ProductListHeader = ({ title }) => {
  return (
    <PLHeaderContainer>
      <PLTitlesContainer>
        <PLHeaderTitle>{title}</PLHeaderTitle>
        <PLHeaderSubTitle>
          Made-to-order with your choice of fabric, legs, and sizes – compare
          your options with our Collections guide.
        </PLHeaderSubTitle>
      </PLTitlesContainer>
      <PLHeaderSortingContainer>
        <PLHeaderItemNumbers>83 results</PLHeaderItemNumbers>
        <SelectLabel>Sorted by:</SelectLabel>
        <Select
          defaultValue="Collection"
          size="large"
          style={{
            width: 220,
          }}
          options={[
            {
              value: "collection",
              label: "Collection",
            },
            {
              value: "featured",
              label: "Featured",
            },
            {
              value: "price",
              label: "Price",
            },
          ]}
        />
      </PLHeaderSortingContainer>
    </PLHeaderContainer>
  );
};

export default ProductListHeader;
