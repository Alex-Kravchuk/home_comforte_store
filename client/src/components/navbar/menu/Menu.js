import React from "react";
import { Link } from "react-router-dom";

import {
  ADMIN_ROUTE,
  HOME_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
} from "../../../utils/routes_consts";
import { MenuContainer, MenuItem, MenuWrapper } from "./Menu.styled";

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuContainer>
        <Link to={HOME_ROUTE}>
          <MenuItem>Furniture</MenuItem>
        </Link>
        <Link to={ADMIN_ROUTE}>
          <MenuItem>Brands</MenuItem>
        </Link>
        <Link to={PRODUCT_ROUTE}>
          <MenuItem>Sales</MenuItem>
        </Link>
        <Link to={PROFILE_ROUTE}>
          <MenuItem>More</MenuItem>
        </Link>
      </MenuContainer>
    </MenuWrapper>
  );
};

export default Menu;
