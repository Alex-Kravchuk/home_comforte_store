import React, { useState } from "react";

import { Collapse, Result } from "antd";

import ExpandIcon from "../../../../../../../../helpers/ExpandIcon/ExpandIcon";

import { useGetWindowSize } from "../../../../../../../../hooks/useGetWindowSize";

import {
  SubPageWrapper,
  SubPageContainer,
} from "../../../AdminProducts.styled";

import { viewport_sizes } from "../../../../../../../../utils/viewport_size_consts";

import GeneralInfo from "./GeneralInfo/GeneralInfo";
import ProductImages from "./ProductImages/ProductImages";
import ProductCustomization from "./ProductCustomization/ProductCustomization";

// TODO if something will go wrong commit was 07.11.2023

const AddProduct = () => {
  const viewport = useGetWindowSize();
  const smallerThanTableScreen = viewport.width <= viewport_sizes.l;

  const items = [
    {
      key: "1",
      label: "General information about the product",
      children: <GeneralInfo />,
    },
    {
      key: "2",
      label: "Product customization options",
      children: <ProductCustomization />,
    },
    {
      key: "3",
      label: "Images",
      children: <ProductImages />,
    },
  ];

  return (
    <SubPageWrapper>
      <SubPageContainer>
        {smallerThanTableScreen ? (
          <Result title="For the correct operation of this page, use a device with a large screen" />
        ) : (
          <Collapse
            items={items}
            defaultActiveKey={["1"]}
            size="large"
            expandIconPosition="end"
            expandIcon={({ isActive }) => <ExpandIcon open={isActive} />}
          />
        )}
      </SubPageContainer>
    </SubPageWrapper>
  );
};

export default AddProduct;
