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
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "How it sits",
    children: <SeatSize />,
  },
  {
    key: "2",
    label: "Description",
    children: <Description />,
  },
  {
    key: "3",
    label: "Dimensions",
    children: <Dimensions />,
  },
  {
    key: "4",
    label: "Why Home Comfort",
    children: <WhyHomeComfort />,
  },
];

const ProductDetails = () => {
  return (
    <ProductDetailsWrapper>
      <ProductDetailsContainer>
        <Collapse
          items={items}
          defaultActiveKey={["1", '2', '3']}
          expandIconPosition="end"
          expandIcon={({ isActive }) => <ExpandIcon open={isActive} />}
        />
      </ProductDetailsContainer>
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
