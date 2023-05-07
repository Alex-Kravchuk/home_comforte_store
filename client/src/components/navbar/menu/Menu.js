import React, { useState, useRef } from "react";

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
                  {name}
                </MenuItem>
              ))}
              <DropDownMenu
                currentHover={currentHover}
                menuCategories={menuData}
                closeDropDownHandler={nothingHoverHandler}
              />
            </MenuContainer>
          </MenuWrapper>
          {console.log(currentHover, "hover")}
          {currentHover !== false && (
            <DropdownDarkBackgroundWrapper scrollDown={scrollDown} />
          )}
        </>
      )}
    </>
  );
};

export default Menu;
