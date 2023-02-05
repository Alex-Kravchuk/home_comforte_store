import React from "react";
import { Link } from "react-router-dom";
import {
  CategoriesTitle,
  DropdownImgItem,
  DropdownMenuContainer,
  DropdownMenuImgContainer,
  DropdownMenuLink,
  DropdownMenuLinkContainer,
  DropdownMenuLinkList,
  DropdownMenuWrapper,
} from "./DropDownMenu.styled";

const DropDownMenu = ({ menuItems, setCurrentHover, id, img }) => {
  const setCurrentHoverHandler = () => setCurrentHover(id);
  const setNullCurrentHoverHandler = () => setCurrentHover(0);

  return (
    <DropdownMenuWrapper
      onMouseMove={setCurrentHoverHandler}
      onMouseLeave={setNullCurrentHoverHandler}
    >
      <DropdownMenuContainer>
        <DropdownMenuLinkContainer>
          <CategoriesTitle>Categories</CategoriesTitle>
          <DropdownMenuLinkList>
            {menuItems.map(({ key, label }) => (
              <DropdownMenuLink key={key}>
                <Link>{label}</Link>
              </DropdownMenuLink>
            ))}
          </DropdownMenuLinkList>
        </DropdownMenuLinkContainer>

        <DropdownMenuImgContainer>
          <DropdownImgItem src={img} alt="img" />
        </DropdownMenuImgContainer>
      </DropdownMenuContainer>
    </DropdownMenuWrapper>
  );
};

export default DropDownMenu;
