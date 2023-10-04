import React from "react";

import SimilarProductsSwiper from "./SimilarProductsSwiper/SimilarProductsSwiper";

import { mockSimilarData } from "./mockData";

import {
  SPHeader,
  SPOffers,
  SPWrapper,
  SPContainer,
  SPHeaderTitle,
  SPHeaderRedirectButton,
} from "./SimilarProducts.styled";

const SimilarProducts = () => {
  const currentProductCategory = "living";
  
  return (
    <SPWrapper>
      <SPContainer>
        <SPHeader>
          <SPHeaderTitle>You may also like:</SPHeaderTitle>
          <SPHeaderRedirectButton>
            Shop all {currentProductCategory}
          </SPHeaderRedirectButton>
        </SPHeader>
        <SPOffers>
          <SimilarProductsSwiper products={mockSimilarData} />
        </SPOffers>
      </SPContainer>
    </SPWrapper>
  );
};

export default SimilarProducts;
