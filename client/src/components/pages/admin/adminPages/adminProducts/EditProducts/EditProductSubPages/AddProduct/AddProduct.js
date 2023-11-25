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
  const [viewerImages, setViewerImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [customizationData, setCustomizationData] = useState([]);

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
            // data={{ viewer: viewerImages, preview: previewImages }}
            customizationData={customizationData}
            setDataHandlerViewer={setViewerImages}
            setDataHandlerPreview={setPreviewImages}
          />
        </TabWrapper>
      ),
    },
  ];

  console.log("====================================");
  console.log(generalData, customizationData);
  console.log("====================================");

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
          />
        )}

        <Button type="primary" size="large">
          Create a new product
        </Button>
      </SubPageContainer>
    </SubPageWrapper>
  );
};

export default AddProduct;
