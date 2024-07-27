import React, { useEffect, useState } from "react";

import { Button, Result, Spin, Tabs, Tooltip, message } from "antd";

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
import {
  ButtonContainer,
  ErrorText,
  ResultContainer,
  TabWrapper,
} from "./AddProduct.styled";
import { AdminPagesSubTitle, AdminPagesTitle } from "../../../Admin.styled";
import { ProductService } from "../../../../../../api/product/productService";

const AddProduct = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [resetFields, setResetFields] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const viewport = useGetWindowSize();
  const smallerThanTableScreen = viewport.width <= viewport_sizes.l;
  // generalData contains information about the general data of the product and its dimensions
  const [generalData, setGeneralData] = useState([]);
  // previewImages contains images from the real world
  const [previewImages, setPreviewImages] = useState([]);
  // customizationData contains different modifiers and images for product viewer
  const [customizationData, setCustomizationData] = useState([]);
  // viewerFiltersData contains filters for request with images, which will be display in viewer
  const [viewerFiltersData, setViewerFiltersData] = useState([]);

  useEffect(() => {
    console.log("general data was reset", generalData);
  }, [generalData]);

  const items = [
    {
      key: "1",
      label: "General information about the product",
      children: (
        <TabWrapper>
          <GeneralInfo
            resetFields={resetFields}
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
          <ProductCustomization
            resetFields={resetFields}
            setDataHandler={setCustomizationData}
          />
        </TabWrapper>
      ),
    },
    {
      key: "3",
      label: "Images",
      children: (
        <TabWrapper>
          <ProductImages
            resetFields={resetFields}
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
      const notAllDataAreGiven =
        generalData.length === 0 ||
        previewImages.length === 0 ||
        customizationData.length === 0 ||
        viewerFiltersData.length === 0;

      if (notAllDataAreGiven) {
        messageApi.open({
          type: "error",
          content:
            "You have not provided all the required information about the product",
        });

        return;
      }

      setLoading(true);
      const product = await ProductService.createProduct(
        generalData.subGeneral
      );

      console.log("suchasd", product);

      const dimensionConfig = {
        furnitureId: product.id,
        img: generalData.dimension.img,
        details: JSON.stringify(generalData.dimension.info),
      };

      const productDimension = await ProductService.createProductDimension(
        dimensionConfig
      );

      const productModifiers = await ProductService.createProductModifier(
        customizationData,
        product.id
      );

      const productViewer = await ProductService.createProductViewer(
        viewerFiltersData,
        product.id
      );

      const productPreview = await ProductService.createProductPreviewImage(
        previewImages,
        product.id
      );

      console.log("product:", product);
      console.log("product dimensions:", productDimension);
      console.log("product modifiers:", productModifiers);
      console.log("product viewer:", productViewer);
      console.log("product preview:", productPreview);
      setLoading(false);
      setError(false);
      messageApi.open({
        type: "success",
        content: "The product was successfully created!",
      });
    } catch (error) {
      console.log("error:", error);
      setLoading(false);
      if (error.response) {
        setError(error.response?.data.message);
        messageApi.open({
          type: "error",
          content: error.response.data.message,
        });
      } else {
        setError(error.message);
        messageApi.open({
          type: "error",
          content: error.message,
        });
      }
    }
  };

  const resetForNewProduct = () => {
    setResetFields(true);
    setError(null);
    setLoading(false);
    setActiveTab("1");
    window.scrollTo(0, 0);
    setGeneralData([]);
    setPreviewImages([]);
    setCustomizationData([]);
    setViewerFiltersData([]);
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
            activeKey={activeTab}
            onChange={(key) => setActiveTab(key)}
          />
        )}

        {activeTab === "4" && (
          <ResultContainer>
            {contextHolder}

            {!loading && error === false ? (
              <Result
                status="success"
                title="Product was successfully created!"
                extra={[
                  <Button key="redirect">
                    Go to the created product page
                  </Button>,
                  <Button key="new" onClick={resetForNewProduct}>
                    Add a new product
                  </Button>,
                ]}
              />
            ) : (
              <ButtonContainer>
                <Button
                  size="large"
                  type="primary"
                  loading={loading}
                  onClick={createProductRequest}
                >
                  All is well. Confirm
                </Button>
              </ButtonContainer>
            )}
          </ResultContainer>
        )}
      </AdminProductsContainer>
    </AdminProductsWrapper>
  );
};

export default AddProduct;
