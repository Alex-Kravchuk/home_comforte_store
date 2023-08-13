import React from "react";
import { CATContainer, CATWrapper } from "./CategoriesAndTypes.styled";
import { AdminPagesSubTitle, AdminPagesTitle } from "../../../Admin.styled";
import { AdminTitlesGroupe } from "../AdminProducts.styled";
import TabSubPages from "./TabSubPages/TabSubPages";

const CategoriesAndTypes = () => {
  return (
    <CATWrapper>
      <CATContainer>
        <AdminTitlesGroupe>
          <AdminPagesTitle>Categories and types of products</AdminPagesTitle>
          <AdminPagesSubTitle>
            Sorting goods by categories and types is one of the most important
            elements of an online store. This allows the client to quickly and
            conveniently search for the product he needs.
          </AdminPagesSubTitle>
        </AdminTitlesGroupe>
        <TabSubPages />
      </CATContainer>
    </CATWrapper>
  );
};

export default CategoriesAndTypes;
