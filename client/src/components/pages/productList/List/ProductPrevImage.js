import React from "react";
import { ListImg, ProductPrevImageContainer } from "./List.styled";

const ProductPrevImage = ({ imgSrc }) => {
  return (
    <ProductPrevImageContainer>
      <ListImg
        src={process.env.REACT_APP_API_URL + `${imgSrc}`}
      />
     </ProductPrevImageContainer>
  );
};

export default ProductPrevImage;
