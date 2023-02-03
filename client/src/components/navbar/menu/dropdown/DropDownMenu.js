import React from "react";
import {
  DropdownMenuContainer,
  DropdownMenuImgContainer,
  DropdownMenuLinkContainer,
  DropdownMenuWrapper,
} from "./DropDownMenu.styled";

const DropDownMenu = ({ menuItems }) => {
  return (
    <DropdownMenuWrapper>
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
