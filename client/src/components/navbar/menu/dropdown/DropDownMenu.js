import React from "react";
import { Link } from "react-router-dom";

import { useScrollObserver } from "../../../../hooks/useScrollObserver";

import {
  TypeColumn,
  SubTypeName,
  TypeTitleImg,
  TypeTitleName,
  SubTypeContainer,
  TypeTitleContainer,
  DropdownMenuWrapper,
  DropdownMenuContainer,
} from "./DropDownMenu.styled";

const DropDownMenu = ({
  currentHover,
  menuCategories,
  closeDropDownHandler,
}) => {
  const scroll = useScrollObserver();

  const dataAreExist = menuCategories[currentHover];
  const typesOfProducts = dataAreExist?.types ? dataAreExist.types : [];

  const routeTempalte = "products/" + dataAreExist?.name.toLowerCase() + "/";

  const closeDropDown = () => {
    closeDropDownHandler();
  };

  return (
    <DropdownMenuWrapper scrollDown={scroll} currentHover={currentHover}>
      {dataAreExist && (
        <DropdownMenuContainer>
          {typesOfProducts.map((type) => (
            <TypeColumn key={type.id}>
              <Link
                to={
                  routeTempalte +
                  "all-" +
                  type.name.split(" ").join("-").toLowerCase()
                }
              >
                <TypeTitleContainer>
                  <TypeTitleImg
                    src={process.env.REACT_APP_API_URL + type.img}
                  />
                  <TypeTitleName>{type.name}</TypeTitleName>
                </TypeTitleContainer>
              </Link>

              <SubTypeContainer>
                {type.subTypes?.map((subtype) => (
                  <SubTypeName onClick={closeDropDown} key={subtype.id}>
                    <Link
                      to={
                        routeTempalte +
                        subtype.name.split(" ").join("-").toLowerCase()
                      }
                    >
                      {subtype.name}
                    </Link>
                  </SubTypeName>
                ))}
                <SubTypeName onClick={closeDropDown} key={type.name}>
                  <Link
                    to={
                      routeTempalte +
                      "all-" +
                      type.name.split(" ").join("-").toLowerCase()
                    }
                  >{`All ${type.name.toLowerCase()}`}</Link>
                </SubTypeName>
              </SubTypeContainer>
            </TypeColumn>
          ))}
        </DropdownMenuContainer>
      )}
    </DropdownMenuWrapper>
  );
};

export default DropDownMenu;
