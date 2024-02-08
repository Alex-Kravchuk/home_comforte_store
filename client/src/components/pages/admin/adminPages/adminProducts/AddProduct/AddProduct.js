import React, { useState } from "react";

import { Button, Result, Tabs, Tooltip } from "antd";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import GeneralInfo from "./GeneralInfo/GeneralInfo";
import ProductImages from "./ProductImages/ProductImages";
import ProductCustomization from "./ProductCustomization/ProductCustomization";
import PreviewProductPage from "../../../../product/PreviewProductPage/PreviewProductPage";

import { useGetWindowSize } from "../../../../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";

import {
  TabLabel,
  TabLabelText,
  AdminTitlesGroupe,
  AdminTitleContainer,
  AdminProductsWrapper,
  AdminProductsContainer,
} from "../AdminProducts.styled";
import { ButtonContainer, TabWrapper } from "./AddProduct.styled";
import { AdminPagesSubTitle, AdminPagesTitle } from "../../../Admin.styled";
import { ProductService } from "../../../../../../api/product/productService";

const AddProduct = () => {
  const viewport = useGetWindowSize();
  const smallerThanTableScreen = viewport.width <= viewport_sizes.l;
  const [activeTab, setActiveTab] = useState("1");

  // generalData contains information about the general data of the product and its dimensions
  const [generalData, setGeneralData] = useState([]);
  // previewImages contains images from the real world
  const [previewImages, setPreviewImages] = useState([]);
  // customizationData contains different modifiers and images for product viewer
  const [customizationData, setCustomizationData] = useState([]);
  // viewerFiltersData contains filters for request with images, which will be display in viewer
  const [viewerFiltersData, setViewerFiltersData] = useState([]);

  const items = [
    {
      key: "1",
      label: "General information about the product",
      children: (
        <TabWrapper>
          <GeneralInfo
            setDataHandler={setGeneralData}
            customizationData={customizationData}
            setCustomizationDataHandler={setCustomizationData}
          />
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
            viewerFiltersData={viewerFiltersData}
            setDataHandlerPreview={setPreviewImages}
            setDataHandlerViewer={setCustomizationData}
            setDataHandlerFilters={setViewerFiltersData}
          />
        </TabWrapper>
      ),
    },

    {
      key: "4",
      label: (
        <TabLabel>
          <RemoveRedEyeOutlinedIcon />
          <TabLabelText>Product preview</TabLabelText>
        </TabLabel>
      ),
      children: (
        <TabWrapper>
          <PreviewProductPage
            generalData={generalData}
            previewImages={previewImages}
            customizationData={customizationData}
            viewerFiltersData={viewerFiltersData}
          />
        </TabWrapper>
      ),
    },
  ];

  const createProductRequest = async () => {
    try {
      const product = await ProductService.createProduct(
        generalData.subGeneral
      );

      console.log("product:", product);

      const dimensionConfig = {
        furnitureId: product.id,
        img: generalData.dimension.img,
        details: JSON.stringify(generalData.dimension.info),
      };

      const productDimension = await ProductService.createProductDimension(
        dimensionConfig
      );

      const productModifier = await ProductService.createProductModifier(
        customizationData,
        product.id
      );

      
      console.log("product dimensions:", productDimension);
    } catch (error) {
      console.log("error:", error.message);
    }
  };

  console.log("====================================");
  console.log("general data:", generalData);
  console.log("====================================");

  console.log("====================================");
  console.log("customization data:", customizationData);
  console.log("====================================");

  console.log("====================================");
  console.log("preview images data:", previewImages);
  console.log("====================================");

  console.log("====================================");
  console.log("filters options:", viewerFiltersData);
  console.log("====================================");

  return (
    <AdminProductsWrapper>
      <AdminProductsContainer>
        <AdminTitlesGroupe>
          <AdminTitleContainer>
            <AdminPagesTitle>Add a new product</AdminPagesTitle>

            <Tooltip
              title="To be able to edit certain elements on this page, please use a device with a large screen"
              placement="bottomLeft"
            >
              <InfoOutlinedIcon />
            </Tooltip>
          </AdminTitleContainer>

          <AdminPagesSubTitle>
            The most important feature in the product editing section is the
            product adding part. When adding products here, do not ignore to
            fill in all the required fields completely and follow the product
            adding rules.
          </AdminPagesSubTitle>
        </AdminTitlesGroupe>

        {smallerThanTableScreen ? (
          <Result title="For the correct operation of this page, use a device with a large screen" />
        ) : (
          <Tabs
            type="card"
            size="small"
            items={items}
            defaultActiveKey="1"
            onChange={(key) => setActiveTab(key)}
          />
        )}

        {activeTab === "4" && (
          <ButtonContainer>
            <Button size="large" type="primary" onClick={createProductRequest}>
              All is well. Confirm
            </Button>
          </ButtonContainer>
        )}
      </AdminProductsContainer>
    </AdminProductsWrapper>
  );
};

export default AddProduct;
