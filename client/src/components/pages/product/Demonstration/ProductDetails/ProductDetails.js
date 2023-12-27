import React from "react";
import {
  ProductDetailsContainer,
  ProductDetailsWrapper,
} from "./ProductDetails.styled";

import { Collapse } from "antd";
import ExpandIcon from "../../../../../helpers/ExpandIcon/ExpandIcon";
import SeatSize from "./SeatSize/SeatSize";
import Description from "./Description/Description";
import Dimensions from "./Dimensions/Dimensions";
import WhyHomeComfort from "./WhyHomeComfort/WhyHomeComfort";

const ProductDetails = ({descriptionText, dimension}) => {
  
  const items = [
    {
      key: "1",
      label: "How it sits",
      children: <SeatSize info={dimension?.info} />,
    },
    {
      key: "2",
      label: "Description",
      children: <Description text={descriptionText} />,
    },
    {
      key: "3",
      label: "Dimensions",
      children: <Dimensions img={dimension?.img} />,
    },
    {
      key: "4",
      label: "Why Home Comfort",
      children: <WhyHomeComfort />,
    },
  ];
  return (
    <ProductDetailsWrapper>
      <ProductDetailsContainer>
        <Collapse
          items={items}
          defaultActiveKey={["1", "2", "3"]}
          expandIconPosition="end"
          expandIcon={({ isActive }) => <ExpandIcon open={isActive} />}
        />
      </ProductDetailsContainer>
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
