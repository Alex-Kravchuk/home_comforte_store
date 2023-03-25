import React from "react";

import {
  ConstructionTitle,
  OwnConstructionWrapper,
  OwnConstructionContainer,
} from "./OwnConstruction.styled";
import { Container } from "../../../../../styles/globalStyles";

import ConstructionItem from "./constructionItem/ConstuctionItem";
import { constructionItemsConfig } from "./constructionItem/itemsConfig";

const OwnConstruction = () => {
  return (
    <OwnConstructionWrapper>
      <Container>
        <ConstructionTitle>
          All you need for your perfect piece
        </ConstructionTitle>
        <OwnConstructionContainer>
          {constructionItemsConfig.map(
            ({ id, description, title, buttons, img }) => (
              <ConstructionItem
                key={id}
                srcImg={img}
                descr={description}
                title={title}
                buttons={buttons}
              />
            )
          )}
        </OwnConstructionContainer>
      </Container>
    </OwnConstructionWrapper>
  );
};

export default OwnConstruction;
