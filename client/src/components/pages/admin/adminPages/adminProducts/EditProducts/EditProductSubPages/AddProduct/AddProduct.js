import React from "react";

import { Collapse, Result } from "antd";

import ExpandIcon from "../../../../../../../../helpers/ExpandIcon/ExpandIcon";

import MainContentForm from "./AddProductForms/MainContentForm/MainContentForm";
import ImageContentForm from "./AddProductForms/ImageContentForm/ImageContentForm";

import { useGetWindowSize } from "../../../../../../../../hooks/useGetWindowSize";

import {
  SubPageWrapper,
  SubPageContainer,
} from "../../../AdminProducts.styled";

import { viewport_sizes } from "../../../../../../../../utils/viewport_size_consts";

import {
  AddProductContent,
  AddProductFormContainer,
} from "./AddProduct.styled";
import GeneralInfo from "./GeneralInfo/GeneralInfo";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "General information about the product",
    children: <GeneralInfo />,
  },
  {
    key: "2",
    label: "Images",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Product customization options",
    children: <p>{text}</p>,
  },
];

const AddProduct = () => {
  const viewport = useGetWindowSize();
  const smallerThanTableScreen = viewport.width <= viewport_sizes.l;
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
