import React from "react";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import {
  CartButtonContainer,
  CartButtonWrapper,
  CartButtonPriceContainer,
  CartButtonPrice,
  CartButtonIconContainer,
} from "./AddToCartButton.styled";

const AddToCartButton = ({ sum = 0 }) => {
  return (
    <CartButtonWrapper>
      <CartButtonContainer>
        <CartButtonPriceContainer>${sum}</CartButtonPriceContainer>
        <CartButtonIconContainer>
          <ShoppingCartOutlinedIcon />
          Add to cart
        </CartButtonIconContainer>
      </CartButtonContainer>
    </CartButtonWrapper>
  );
};

export default AddToCartButton;
