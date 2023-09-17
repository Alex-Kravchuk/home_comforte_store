import React from "react";
import {
  ProductContainer,
  ProductWrapper,
  ProudctInfoSection,
} from "./Product.styled";
import { Container } from "../../../styles/globalStyles";
import Breadcrumb from "../../../helpers/BreadCrumb/BreadCrumb";
import Demonstration from "./Demonstration/Demonstration";
import Customization from "./Customization/Customization";
import Reviews from "./Reviews/Reviews";

const Product = () => {
  return (
    <ProductWrapper>
      {/* <Breadcrumb /> */}
      <ProductContainer> 
        <ProudctInfoSection>
          <Demonstration />
          <Customization />
        </ProudctInfoSection>
        <Reviews />
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Product;
