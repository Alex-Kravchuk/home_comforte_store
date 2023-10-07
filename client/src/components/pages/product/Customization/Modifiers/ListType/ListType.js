import React from "react";

import {
  ListTypeContainer,
  ListTypeModifierContainer,
  ListTypeWrapper,
  ModifieTitle,
  ModifierDescr,
  ModifierImg,
  ModifierImgContainer,
} from "./ListType.styled";

const ListType = ({ data }) => {
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <ListTypeWrapper>
      <ListTypeContainer>
        {data.map((item) => (
          <ListTypeModifierContainer key={item.id}>
            <ModifierImgContainer>
              <ModifierImg src={item.img} alt={item.title} />
            </ModifierImgContainer>
            <ModifieTitle>{item.title}</ModifieTitle>
            <ModifierDescr>{item.descr}</ModifierDescr>
          </ListTypeModifierContainer>
        ))}
      </ListTypeContainer>
    </ListTypeWrapper>
  );
};

export default ListType;
