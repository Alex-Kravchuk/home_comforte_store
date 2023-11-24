import React, { useState } from "react";

import { Result, Tabs } from "antd";

import { useGetWindowSize } from "../../../../../../../../hooks/useGetWindowSize";

import {
  SubPageWrapper,
  SubPageContainer,
} from "../../../AdminProducts.styled";

import { viewport_sizes } from "../../../../../../../../utils/viewport_size_consts";

import GeneralInfo from "./GeneralInfo/GeneralInfo";
import ProductImages from "./ProductImages/ProductImages";
import ProductCustomization from "./ProductCustomization/ProductCustomization";
import { TabWrapper } from "./AddProduct.styled";

// TODO if something will go wrong commit was 07.11.2023

const AddProduct = () => {
  const viewport = useGetWindowSize();
  const smallerThanTableScreen = viewport.width <= viewport_sizes.l;

  const items = [
    {
      key: "1",
      label: "General information about the product",
      children: (
        <TabWrapper>
          <GeneralInfo />
        </TabWrapper>
      ),
    },
    {
      key: "2",
      label: "Product customization options",
      children: (
        <TabWrapper>
          <ProductCustomization />
        </TabWrapper>
      ),
    },
    {
      key: "3",
      label: "Images",
      children: (
        <TabWrapper>
          <ProductImages />
        </TabWrapper>
      ),
    },
  ];

  return (
    <SubPageWrapper>
      <SubPageContainer>
        {smallerThanTableScreen ? (
          <Result title="For the correct operation of this page, use a device with a large screen" />
        ) : (
          <Tabs
            items={items}
            defaultActiveKey={["1"]}
            size="small"
            type="card"
            expandIconPosition="end"
          />
        )}
      </SubPageContainer>
    </SubPageWrapper>
  );
};

export default AddProduct;
