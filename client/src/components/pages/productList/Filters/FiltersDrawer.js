import React from "react";

import { Drawer, Select } from "antd";

import { useGetWindowSize } from "../../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";

import { FiltersDrawerContainer, SelectContainer } from "./Filters.styled";
import { SelectLabel } from "../ProductListHeader/ProductListHeader.styled";

const FiltersDrawer = ({ open, onCloseDrawer, children }) => {
  const viewport = useGetWindowSize();
  const modileScreen = viewport.width < viewport_sizes.ml;
  return (
    <Drawer
      title="Filters"
      bodyStyle={{ padding: 0 }}
      width={modileScreen ? "75%" : "40%"}
      onClose={() => onCloseDrawer(false)}
      open={open}
    >
      <FiltersDrawerContainer>
        <SelectContainer>
          <SelectLabel>Sort by:</SelectLabel>
          <Select
            defaultValue="Collection"
            size="large"
            style={{
              width: "80%",
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
        </SelectContainer>
        {children}
      </FiltersDrawerContainer>
    </Drawer>
  );
};

export default FiltersDrawer;
