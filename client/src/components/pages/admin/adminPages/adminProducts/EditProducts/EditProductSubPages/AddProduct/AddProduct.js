import React from "react";

import {
  SubPageWrapper,
  SubPageContainer,
} from "../../../AdminProducts.styled";
import { AddProductContent, AddProductFormContainer } from "./AddProduct.styled";
import MainContentForm from "./AddProductForms/MainContentForm/MainContentForm";
import ImageContentForm from "./AddProductForms/ImageContentForm/ImageContentForm";

const AddProduct = () => {
  return (
    <SubPageWrapper>
      <SubPageContainer>
        <AddProductContent>
          <AddProductFormContainer>
            <MainContentForm />
          </AddProductFormContainer>
          <AddProductFormContainer>
            <ImageContentForm />
          </AddProductFormContainer>
        </AddProductContent>
      </SubPageContainer>
    </SubPageWrapper>
  );
};

export default AddProduct;
