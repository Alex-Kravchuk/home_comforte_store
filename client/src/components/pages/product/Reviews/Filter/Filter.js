import React from "react";

import { Select } from "antd";

import {
  FilterWrapper,
  FilterContainer,
  FilterSortLabel,
  FilterReviewsNumber,
  FilterSortContainer,
} from "./Filter.styled";

const Filter = () => {
  const sortSelectOptions = [
    {
      value: "newest",
      label: "The newest",
    },
    {
      value: "oldest",
      label: "The oldest",
    },
    {
      value: "highest",
      label: "Highest rating",
    },
    {
      value: "lowest",
      label: "The lowest rating",
    },
  ];

  return (
    <FilterWrapper>
      <FilterContainer>
        <FilterReviewsNumber>518 reviews</FilterReviewsNumber>
        <FilterSortContainer>
          <FilterSortLabel>Sort by:</FilterSortLabel>
          <Select
            defaultValue="highest"
            options={sortSelectOptions}
            size="small"
          />
        </FilterSortContainer>
      </FilterContainer>
    </FilterWrapper>
  );
};

export default Filter;
