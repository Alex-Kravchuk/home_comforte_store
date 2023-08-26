import React from "react";

import TabSubPages from "./TabSubPages/CategoriesAndTypesSubPages";

import {
  AdminProductsContainer,
  AdminProductsWrapper,
  AdminTitlesGroupe,
} from "../AdminProducts.styled";

import { AdminPagesSubTitle, AdminPagesTitle } from "../../../Admin.styled";

const CategoriesAndTypes = () => {
  return (
    <AdminProductsWrapper>
      <AdminProductsContainer>
        <AdminTitlesGroupe>
          <AdminPagesTitle>Categories and types of products</AdminPagesTitle>
          <AdminPagesSubTitle>
            Sorting goods by categories and types is one of the most important
            elements of an online store. This allows the client to quickly and
            conveniently search for the product he needs.
          </AdminPagesSubTitle>
        </AdminTitlesGroupe>
        <TabSubPages />
      </AdminProductsContainer>
    </AdminProductsWrapper>
  );
};

export default CategoriesAndTypes;
