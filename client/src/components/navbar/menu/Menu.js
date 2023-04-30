import React, { useState, useRef } from "react";

import DropDownMenu from "./dropdown/DropDownMenu";
import { useMouseLeave } from "../../../hooks/useMouseLeave";

import {
  MenuItem,
  MenuWrapper,
  MenuContainer,
  DropdownDarkBackgroundWrapper,
} from "./Menu.styled";

const Menu = ({ bigScreen, menuCategories }) => {
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
              {menuCategories.map(({ id, name }, index) => (
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
                menuCategories={menuCategories}
                closeDropDownHandler={nothingHoverHandler}
              />
            </MenuContainer>
          </MenuWrapper>
          {currentHover !== false && <DropdownDarkBackgroundWrapper />}
        </>
      )}
    </>
  );
};

export default Menu;
