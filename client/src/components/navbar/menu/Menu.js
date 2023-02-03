import { Dropdown } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import {
  ADMIN_ROUTE,
  HOME_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
} from "../../../utils/routes_consts";
import { MenuContainer, MenuItem, MenuWrapper } from "./Menu.styled";
import DropDownMenu from "./dropdown/DropDownMenu";

import { DropdownMenuItemsSofa } from "../../../assets/mock/dropdownMenuItemsMOCK";
import { menu_config } from "../../../utils/menu_config";

const Menu = ({ bigScreen }) => {
  return (
    <>
      {bigScreen && (
        <MenuWrapper>
          <MenuContainer>
            {menu_config.map(({ id, label, link, dropdownItems }) => (
              <Dropdown
                key={id}
                dropdownRender={() => (
                  <DropDownMenu menuItems={dropdownItems} />
                )}
              >
                <Link to={link}>
                  <MenuItem>{label}</MenuItem>
                </Link>
              </Dropdown>
            ))}
          </MenuContainer>
        </MenuWrapper>
      )}
    </>
  );
};

export default Menu;
