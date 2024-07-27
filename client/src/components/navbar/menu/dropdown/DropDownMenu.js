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

  const routeTempalte = dataAreExist?.name.toLowerCase() + "/";

  const closeDropDown = () => {
    closeDropDownHandler();
  };

  const formate = (text) => text.split(" ").join("-").toLowerCase();

  return (
    <DropdownMenuWrapper scrollDown={scroll} currentHover={currentHover}>
      {dataAreExist && (
        <DropdownMenuContainer>
          {typesOfProducts.map((type) => (
            <TypeColumn key={type.id}>
              <Link
                to={routeTempalte + "all-" + formate(type.name)}
                state={{ typeId: type.id, categoryId: type.categoryId }}
              >
                <TypeTitleContainer>
                  <TypeTitleImg
                    src={process.env.REACT_APP_API_URL + type.icon}
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
                        "all-" +
                        formate(type.name) +
                        "/" +
                        formate(subtype.name)
                      }
                      state={{
                        typeId: type.id,
                        categoryId: type.categoryId,
                        subTypeId: subtype.id,
                      }}
                    >
                      {subtype.name}
                    </Link>
                  </SubTypeName>
                ))}
                <SubTypeName onClick={closeDropDown} key={type.name}>
                  <Link
                    to={routeTempalte + "all-" + formate(type.name)}
                    state={{
                      typeId: type.id,
                      categoryId: type.categoryId,
                    }}
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
