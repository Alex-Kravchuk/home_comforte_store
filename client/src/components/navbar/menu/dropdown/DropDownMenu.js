import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenuContainer,
  DropdownMenuWrapper,
  SubTypeContainer,
  SubTypeName,
  TypeColumn,
  TypeTitleContainer,
  TypeTitleImg,
  TypeTitleName,
} from "./DropDownMenu.styled";
import { useScrollObserver } from "../../../../hooks/useScrollObserver";
import { ADMIN_ROUTE } from "../../../../utils/routes_consts";

const DropDownMenu = ({
  currentHover,
  menuCategories,
  closeDropDownHandler,
}) => {
  const scroll = useScrollObserver();

  const dataAreExist = menuCategories[currentHover];

  const closeDropDown = () => {
    closeDropDownHandler();
  };

  console.log("dataAreExist", dataAreExist);

  return (
    <DropdownMenuWrapper scrollDown={scroll} currentHover={currentHover}>
      {dataAreExist && (
        <DropdownMenuContainer>
          {dataAreExist.types.map((type) => (
            <TypeColumn>
              <TypeTitleContainer>
                <TypeTitleImg src={process.env.REACT_APP_API_URL + type.img} />
                <TypeTitleName>{type.name}</TypeTitleName>
              </TypeTitleContainer>
              <SubTypeContainer>
                {type.subTypes.map((subtype) => (
                  // LINK here is for temprorary test
                  <SubTypeName onClick={closeDropDown}>
                    <Link to={ADMIN_ROUTE}>{subtype.name}</Link>
                  </SubTypeName>
                ))}
              </SubTypeContainer>
            </TypeColumn>
          ))}
        </DropdownMenuContainer>
      )}
    </DropdownMenuWrapper>
  );
};

export default DropDownMenu;
