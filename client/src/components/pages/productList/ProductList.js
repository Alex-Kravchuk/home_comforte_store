import React from "react";
import { PLContainer, PLWrapper } from "./ProductList.styled";
import { Container } from "../../../styles/globalStyles";

const ProductList = () => {
  return (
    <PLWrapper>
      <Container>
        <PLContainer>THIS IS A PRODUCT LIST PAGE</PLContainer>
      </Container>
    </PLWrapper>
  );
};

export default ProductList;
