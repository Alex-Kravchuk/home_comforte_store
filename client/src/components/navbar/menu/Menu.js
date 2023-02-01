import React from "react";
import { Link } from "react-router-dom";

import {
  ADMIN_ROUTE,
  HOME_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
} from "../../../utils/routes_consts";
import { MenuContainer, MenuItem, MenuWrapper } from "./Menu.styled";

const Menu = ({ bigScreen }) => {
  return (
    <>
      {bigScreen && (
        <MenuWrapper>
          <MenuContainer>
            <Link to={HOME_ROUTE}>
              <MenuItem>Sofas</MenuItem>
            </Link>
            <Link to={ADMIN_ROUTE}>
              <MenuItem>Chairs</MenuItem>
            </Link>
            <Link to={PRODUCT_ROUTE}>
              <MenuItem>Tables</MenuItem>
            </Link>
            <Link to={PROFILE_ROUTE}>
              <MenuItem>Beds</MenuItem>
            </Link>
            <Link to={ADMIN_ROUTE}>
              <MenuItem>Mirrors</MenuItem>
            </Link>
            <Link to={PRODUCT_ROUTE}>
              <MenuItem>Carpets</MenuItem>
            </Link>
            <Link to={PROFILE_ROUTE}>
              <MenuItem>Closets</MenuItem>
            </Link>
          </MenuContainer>
        </MenuWrapper>
      )}
    </>
  );
};

export default Menu;
