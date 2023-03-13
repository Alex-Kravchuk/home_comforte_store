import React from "react";
import {
  CollectionsItemDescription,
  CollectionsItemImg,
  CollectionsItemTitleArrow,
  CollectionsItemTitleContainer,
  CollectionsItemTitleName,
  CollectionsItemWrapper,
} from "./CollectionsItem.styled";

import EastIcon from "@mui/icons-material/East";

const CollectionsItem = ({ collection }) => {
  const { img, name, description } = collection;

  return (
    <CollectionsItemWrapper>
      <CollectionsItemImg src={img} />
      <CollectionsItemTitleContainer>
        <CollectionsItemTitleName>
          <div>{name}</div>
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
