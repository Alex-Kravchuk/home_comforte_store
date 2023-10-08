import React from "react";

import { Tooltip } from "antd";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import EditProductsSubPages from "./EditProductSubPages/EditProductSubPages";

import { AdminPagesSubTitle, AdminPagesTitle } from "../../../Admin.styled";

import {
  AdminTitlesGroupe,
  AdminTitleContainer,
  AdminProductsWrapper,
  AdminProductsContainer,
} from "../AdminProducts.styled";

const EditProducts = () => {
  return (
    <AdminProductsWrapper>
      <AdminProductsContainer>
        <AdminTitlesGroupe>
          <AdminTitleContainer>
            <AdminPagesTitle>Edit products</AdminPagesTitle>

            <Tooltip
              title="To be able to edit certain elements on this page, please use a device with a large screen"
              placement="bottomLeft"
            >
              <InfoOutlinedIcon />
            </Tooltip>
          </AdminTitleContainer>

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
