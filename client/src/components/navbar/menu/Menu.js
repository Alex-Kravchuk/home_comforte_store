import { Dropdown } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MenuContainer, MenuItem, MenuWrapper } from "./Menu.styled";
import DropDownMenu from "./dropdown/DropDownMenu";

import { menu_config } from "../../../utils/menu_config";

const Menu = ({ bigScreen }) => {
  const [currentHover, setCurrentHover] = useState(0);
  
  return (
    <>
      {bigScreen && (
        <MenuWrapper>
          <MenuContainer>
            {menu_config.map(({ id, label, link, dropdownItems }) => (
              <Dropdown
                placement="bottom"
                key={id}
                dropdownRender={() => (
                  <DropDownMenu
                    id={id}
                    menuItems={dropdownItems}
                    setCurrentHover={setCurrentHover}
                  />
                )}
              >
                <Link to={link}>
                  <MenuItem activeMenuItem={id === currentHover}>
                    {label}
                  </MenuItem>
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
