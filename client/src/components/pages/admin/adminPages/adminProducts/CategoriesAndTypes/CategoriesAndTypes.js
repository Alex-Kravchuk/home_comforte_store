import React from "react";

import TabSubPages from "./TabSubPages/CategoriesAndTypesSubPages";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import {
  AdminProductsContainer,
  AdminProductsWrapper,
  AdminTitleContainer,
  AdminTitlesGroupe,
} from "../AdminProducts.styled";

import { AdminPagesSubTitle, AdminPagesTitle } from "../../../Admin.styled";
import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";
import { useGetWindowSize } from "../../../../../../hooks/useGetWindowSize";
import { Tooltip } from "antd";

const CategoriesAndTypes = () => {
  const viewport = useGetWindowSize();
  const smallerThanTabletScreen = viewport.width <= viewport_sizes.l;

  return (
    <AdminProductsWrapper>
      <AdminProductsContainer>
        <AdminTitlesGroupe>
          <AdminTitleContainer>
            <AdminPagesTitle>Categories and types of products</AdminPagesTitle>
            <Tooltip
              title="To be able to edit certain elements on this page, please use a device with a large screen"
              placement="bottomLeft"
            >
              <InfoOutlinedIcon />
            </Tooltip>
          </AdminTitleContainer>

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
