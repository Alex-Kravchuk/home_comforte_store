import React, { useState } from "react";

import { Button, Result, Tabs } from "antd";

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

  const [generalData, setGeneralData] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  // customization data has data about different modifiers and images for product viewer
  const [customizationData, setCustomizationData] = useState([
    // {
    //   id: 1,
    //   name: "Choose Fabric",
    //   displayMethod: "list",
    //   items: [
    //     {
    //       id: 1,
    //       title: "Cement",
    //       description: "",
    //     },
    //   ],
    // },
  ]);

  const items = [
    {
      key: "1",
      label: "General information about the product",
      children: (
        <TabWrapper>
          <GeneralInfo setDataHandler={setGeneralData} />
        </TabWrapper>
      ),
    },
    {
      key: "2",
      label: "Product customization options",
      children: (
        <TabWrapper>
          <ProductCustomization setDataHandler={setCustomizationData} />
        </TabWrapper>
      ),
    },
    {
      key: "3",
      label: "Images",
      children: (
        <TabWrapper>
          <ProductImages
            customizationData={customizationData}
            setDataHandlerPreview={setPreviewImages}
            setDataHandlerViewer={setCustomizationData}
          />
        </TabWrapper>
      ),
    },
  ];

  console.log("====================================");
  console.log("general data:", generalData);
  console.log("====================================");

  console.log("====================================");
  console.log("customization data:", customizationData);
  console.log("====================================");

  return (
    <SubPageWrapper>
      <SubPageContainer>
        {smallerThanTableScreen ? (
          <Result title="For the correct operation of this page, use a device with a large screen" />
        ) : (
          <Tabs type="card" size="small" items={items} defaultActiveKey="1" />
        )}

        <Button type="primary" size="large">
          Create a new product
        </Button>
      </SubPageContainer>
    </SubPageWrapper>
  );
};

export default AddProduct;
