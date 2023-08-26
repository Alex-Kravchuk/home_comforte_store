import React from "react";
import {
  AdminProductsContainer,
  AdminProductsWrapper,
  AdminTitlesGroupe,
} from "../AdminProducts.styled";
import { AdminPagesSubTitle, AdminPagesTitle } from "../../../Admin.styled";
import EditProductsSubPages from "./EditProductSubPages/EditProductSubPages";

const EditProducts = () => {
  return (
    <AdminProductsWrapper>
      <AdminProductsContainer>
        <AdminTitlesGroupe>
          <AdminPagesTitle>Edit products</AdminPagesTitle>
          <AdminPagesSubTitle>
            The most important feature in the product editing section is the
            product adding part. When adding products here, do not ignore to
            fill in all the required fields completely and follow the product
            adding rules.
          </AdminPagesSubTitle>
        </AdminTitlesGroupe>
        <EditProductsSubPages />
      </AdminProductsContainer>
    </AdminProductsWrapper>
  );
};

export default EditProducts;
