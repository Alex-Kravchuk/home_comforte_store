import React from "react";
import {
  SPContainer,
  SPHeader,
  SPHeaderRedirectButton,
  SPHeaderTitle,
  SPOffers,
  SPWrapper,
} from "./SimilarProducts.styled";

import SimilarProductsSwiper from "./SimilarProductsSwiper/SimilarProductsSwiper";

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
          <SimilarProductsSwiper />
        </SPOffers>
      </SPContainer>
    </SPWrapper>
  );
};

export default SimilarProducts;
