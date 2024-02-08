import React from "react";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import {
  CartButtonWrapper,
  CartButtonContainer,
  CartButtonIconContainer,
  CartButtonPriceContainer,
} from "./AddToCartButton.styled";

const AddToCartButton = ({ totalPrice = 0 }) => {
  return (
    <CartButtonWrapper>
      <CartButtonContainer>
        <CartButtonPriceContainer>${totalPrice}</CartButtonPriceContainer>
        <CartButtonIconContainer>
          <ShoppingCartOutlinedIcon />
          Add to cart
        </CartButtonIconContainer>
      </CartButtonContainer>
    </CartButtonWrapper>
  );
};

export default AddToCartButton;
