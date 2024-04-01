import React from "react";

import { Checkbox, Collapse } from "antd";

import { filterItems } from "./filterItems";

import {
  Filter,
  FilterName,
  FiltersList,
  FilterDescr,
  CollapseLable,
  FiltersWrapper,
  FiltersContainer,
} from "./Filters.styled";

const Filters = () => {
  const items = filterItems.map((config) => ({
    key: config.id,
    label: <CollapseLable>{config.filteName}</CollapseLable>,
    children: (
      <FiltersList>
        <FilterDescr>{config.description}</FilterDescr>
        {config.filterChildren.map((filter) => (
          <Filter>
            <Checkbox />
            <FilterName>{filter}</FilterName>
          </Filter>
        ))}
      </FiltersList>
    ),
  }));
  return (
    <FiltersWrapper>
      <FiltersContainer>
        <Collapse
          items={items}
          bordered={false}
          defaultActiveKey={["1"]}
          expandIconPosition="right"
        />
      </FiltersContainer>
    </FiltersWrapper>
  );
};

export default Filters;
