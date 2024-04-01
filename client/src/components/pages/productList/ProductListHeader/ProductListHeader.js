import React from "react";

import { Button, Select } from "antd";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import { useGetWindowSize } from "../../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";

import {
  SelectLabel,
  PLHeaderTitle,
  PLHeaderSubTitle,
  PLHeaderContainer,
  PLTitlesContainer,
  FilterBtnContainer,
  PLHeaderItemNumbers,
  PLHeaderSortingContainer,
} from "./ProductListHeader.styled";

const ProductListHeader = ({ title, onOpenDrawer }) => {
  const viewport = useGetWindowSize();
  const smallScreen = viewport.width < viewport_sizes.xl;
  return (
    <PLHeaderContainer>
      <PLTitlesContainer>
        <PLHeaderTitle>{title}</PLHeaderTitle>
        <PLHeaderSubTitle>
          Made-to-order with your choice of fabric, legs, and sizes – compare
          your options with our Collections guide.
        </PLHeaderSubTitle>
      </PLTitlesContainer>

      {smallScreen ? (
        <PLHeaderSortingContainer>
          <Button size="large" onClick={() => onOpenDrawer(true)}>
            <FilterBtnContainer>
              <FilterAltOutlinedIcon />
              Filters & sort
            </FilterBtnContainer>
          </Button>
          <PLHeaderItemNumbers>83 results</PLHeaderItemNumbers>
        </PLHeaderSortingContainer>
      ) : (
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
      )}
    </PLHeaderContainer>
  );
};

export default ProductListHeader;
