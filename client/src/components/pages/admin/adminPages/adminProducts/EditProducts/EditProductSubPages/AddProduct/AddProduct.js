import React from "react";

import MainContentForm from "./AddProductForms/MainContentForm/MainContentForm";
import ImageContentForm from "./AddProductForms/ImageContentForm/ImageContentForm";

import { useGetWindowSize } from "../../../../../../../../hooks/useGetWindowSize";

import {
  SubPageWrapper,
  SubPageContainer,
} from "../../../AdminProducts.styled";
import {
  AddProductContent,
  AddProductFormContainer,
} from "./AddProduct.styled";
import { viewport_sizes } from "../../../../../../../../utils/viewport_size_consts";
import { Result } from "antd";

const AddProduct = () => {
  const viewport = useGetWindowSize();
  const smallerThanTableScreen = viewport.width <= viewport_sizes.l;
  return (
    <SubPageWrapper>
      <SubPageContainer>
        {smallerThanTableScreen ? (
          <Result title="For the correct operation of this page, use a device with a large screen" />
        ) : (
          <AddProductContent>
            <AddProductFormContainer>
              <MainContentForm />
            </AddProductFormContainer>
            <AddProductFormContainer>
              <ImageContentForm />
            </AddProductFormContainer>
          </AddProductContent>
        )}
      </SubPageContainer>
    </SubPageWrapper>
  );
};

export default AddProduct;
