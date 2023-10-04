import React from "react";
import SimilarProducts from "../SimilarProducts";
import {
  SPCWrapper,
  SPCContainer,
  SPCImageContainer,
  SPCImage,
  SPCPrice,
  SPCName,
  SPCcustomSuggestions,
} from "./SimilarProductCard.styled";

const SimilarProductCard = ({ similarProduct }) => {
  const { img, name, price } = similarProduct;
  return (
    <SPCWrapper>
      <SPCContainer>
        <SPCImageContainer>
          <SPCImage src={img} alt={name} />
        </SPCImageContainer>
        <SPCName>{name}</SPCName>
        <SPCPrice>From ${price}</SPCPrice>
        <SPCcustomSuggestions>
          135+ fabrics, 15+ legs
        </SPCcustomSuggestions>
      </SPCContainer>
    </SPCWrapper>
  );
};

export default SimilarProductCard;
