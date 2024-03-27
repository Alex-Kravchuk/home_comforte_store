import React, { useState, useRef } from "react";

import { Link } from "react-router-dom";

import DropDownMenu from "./dropdown/DropDownMenu";

import { useMouseLeave } from "../../../hooks/useMouseLeave";

import {
  MenuItem,
  MenuWrapper,
  MenuContainer,
  DropdownDarkBackgroundWrapper,
} from "./Menu.styled";

const Menu = ({ bigScreen, menuData, scrollDown }) => {
  const [currentHover, setCurrentHover] = useState(false);

  const menuRef = useRef();

  const hoverHandler = (id) => {
    setCurrentHover(id);
  };

  const nothingHoverHandler = () => setCurrentHover(false);

  useMouseLeave(menuRef, currentHover, nothingHoverHandler);

  return (
    <>
      {bigScreen && (
        <>
          <MenuWrapper ref={menuRef}>
            <MenuContainer>
              {menuData.map(({ id, name }, index) => (
                <MenuItem
                  key={id}
                  activeMenuItem={index === currentHover}
                  onMouseOver={() => hoverHandler(index)}
                >
                  <Link to={`products/` + name.toLowerCase()}>{name}</Link>
                </MenuItem>
              ))}
              <DropDownMenu
                currentHover={currentHover}
                menuCategories={menuData}
                closeDropDownHandler={nothingHoverHandler}
              />
            </MenuContainer>
          </MenuWrapper>
          {currentHover !== false && (
            <DropdownDarkBackgroundWrapper scrollDown={scrollDown} />
          )}
        </>
      )}
    </>
  );
};

export default Menu;
