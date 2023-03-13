import React from "react";

import EastIcon from "@mui/icons-material/East";

import {
  NameContainer,
  CollectionsItemImg,
  CollectionsItemWrapper,
  CollectionsItemTitleName,
  CollectionsItemTitleArrow,
  CollectionsItemDescription,
  CollectionsItemTitleContainer,
} from "./CollectionsItem.styled";

const CollectionsItem = ({ collection }) => {
  const { img, name, description } = collection;

  return (
    <CollectionsItemWrapper>
      <CollectionsItemImg src={img} />
      <CollectionsItemTitleContainer>
        <CollectionsItemTitleName>
          <NameContainer>{name}</NameContainer>
          <CollectionsItemTitleArrow>
            <EastIcon />
          </CollectionsItemTitleArrow>
        </CollectionsItemTitleName>
      </CollectionsItemTitleContainer>
      <CollectionsItemDescription>{description}</CollectionsItemDescription>
    </CollectionsItemWrapper>
  );
};

export default CollectionsItem;
