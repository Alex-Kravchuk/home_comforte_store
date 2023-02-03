import React from "react";
import {
  DropdownMenuContainer,
  DropdownMenuImgContainer,
  DropdownMenuLinkContainer,
  DropdownMenuWrapper,
} from "./DropDownMenu.styled";

const DropDownMenu = ({ menuItems, setCurrentHover, id }) => {
  const setCurrentHoverHandler = () => setCurrentHover(id);
  const setNullCurrentHoverHandler = () => setCurrentHover(0);
  
  return (
    <DropdownMenuWrapper
      onMouseMove={setCurrentHoverHandler}
      onMouseLeave={setNullCurrentHoverHandler}
    >
      <DropdownMenuContainer>
        <DropdownMenuLinkContainer>
          {menuItems.map(({ key, label }) => (
            <div key={key}>
              <a>{label}</a>
            </div>
          ))}
        </DropdownMenuLinkContainer>

        <DropdownMenuImgContainer></DropdownMenuImgContainer>
      </DropdownMenuContainer>
    </DropdownMenuWrapper>
  );
};

export default DropDownMenu;
