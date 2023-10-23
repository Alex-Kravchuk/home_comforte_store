import React from "react";
import { PCContainer, PCWrapper } from "./ProductCustomization.styled";
import AddModifier from "./AddModifier/AddModifier";

const ProductCustomization = () => {
  return (
    <PCWrapper>
      <PCContainer>
        <AddModifier />
      </PCContainer>
    </PCWrapper>
  );
};

export default ProductCustomization;
