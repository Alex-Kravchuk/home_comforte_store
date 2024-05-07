import React, { useEffect, useState } from "react";

import {
  Tile,
  TileImg,
  TileDescr,
  TilePrice,
  TileTitle,
  TileTypeWrapper,
  TileTypeContainer,
  TileDescrContainer,
  TileTitleContainer,
} from "./TileType.styled";

const TileType = ({ currentModifier, filtersHandler }) => {
  const [localSelectedOption, setLocalSelectedOption] = useState(null);

  const checkIfSelected = (item) => {
    if (!localSelectedOption && item.defaultMarker) {
      return true;
    }

    if (localSelectedOption?.id !== item.id && item.defaultMarker) {
      return false;
    }

    if (localSelectedOption?.id === item.id) {
      return true;
    }
  };

  const selectItemHandler = (item) => {
    setLocalSelectedOption(item);

    const additionalPrice = isNaN(item.additionalPrice)
      ? 0
      : Number(item.additionalPrice);

    filtersHandler(
      currentModifier.name,
      item.title,
      currentModifier.noAffectToDisplay,
      additionalPrice
    );
  };
  return (
    <TileTypeWrapper>
      <TileTypeContainer>
        {currentModifier.items.map((item) => (
          <Tile
            key={item.id}
            onClick={() => selectItemHandler(item)}
            selected={checkIfSelected(item)}
          >
            <TileTitleContainer>
              <TileTitle>{item.title}</TileTitle>
              <TilePrice>
                {isNaN(item.additionalPrice)
                  ? item.additionalPrice
                  : "+" + item.additionalPrice + "$"}
              </TilePrice>
            </TileTitleContainer>

            <TileDescrContainer>
              {item.img && <TileImg src={item.img.url} alt={item.title} />}
              {item.description && <TileDescr>{item.description}</TileDescr>}
            </TileDescrContainer>
          </Tile>
        ))}
      </TileTypeContainer>
    </TileTypeWrapper>
  );
};

export default TileType;
