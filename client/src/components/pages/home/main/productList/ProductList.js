import React from "react";
import {
  ProductListContainer,
  ProductListItemContainer,
  ProductListItemImage,
  ProductListItemImageContainer,
  ProductListItemTitle,
  ProductListOpacityItemContainer,
  ProductListWrapper,
} from "./ProductList.styled";

import { Container } from "../../../../../styles/globalStyles";

import { product_list } from "../../../../../utils/product_list";

const ProductList = () => {
  return (
    <ProductListWrapper>
      <Container>
        <ProductListContainer>
          {product_list.map(({ title, img, id }) => (
            <ProductListItemContainer key={id}>
              <ProductListOpacityItemContainer />
              <ProductListItemTitle>{title}</ProductListItemTitle>
              <ProductListItemImageContainer>
                <ProductListItemImage src={img} />
              </ProductListItemImageContainer>
            </ProductListItemContainer>
          ))}
        </ProductListContainer>
      </Container>
    </ProductListWrapper>
  );
};

export default ProductList;
