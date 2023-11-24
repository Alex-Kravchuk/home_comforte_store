import React from "react";
import { PIBlock, PIContainer, PIWrapper } from "./ProductImages.styled";
import { InfoBlockTitle } from "../AddProduct.styled";
import ProductViewerImages from "./ProductViewerImages/ProductViewerImages";
import ProductPreviewImages from "./ProductPreviewImages/ProductPreviewImages";
import { Collapse } from "antd";

const ProductImages = () => {
  const imagesSubTabs = [
    {
      key: "1",
      label: <InfoBlockTitle>Product images to view</InfoBlockTitle>,
      children: <ProductViewerImages />,
    },
    {
      key: "2",
      label: <InfoBlockTitle>Product images for preview</InfoBlockTitle>,
      children: <ProductPreviewImages />,
    },
  ];
  return (
    <PIWrapper>
      <PIContainer>
        {/* <Collapse
          items={imagesSubTabs}
          defaultActiveKey={["1"]}
          size="large"
          expandIconPosition="start"
        /> */}
        <PIBlock>
          <InfoBlockTitle>Product images to view</InfoBlockTitle>
          <ProductViewerImages />
        </PIBlock>
        <PIBlock>
          <InfoBlockTitle>Product images for preview</InfoBlockTitle>
          <ProductPreviewImages />
        </PIBlock>
      </PIContainer>
    </PIWrapper>
  );
};

export default ProductImages;
