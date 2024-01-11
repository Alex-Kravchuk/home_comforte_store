import React, { useState } from "react";

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

const TileType = ({
  data,
  currentModifierID,
  filterOptionsHandler,
  selectedOptionHandler,
}) => {
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
    selectedOptionHandler(item);
    setLocalSelectedOption(item);
    filterOptionsHandler(currentModifierID, item);
  };
  return (
    <TileTypeWrapper>
      <TileTypeContainer>
        {data.map((item) => (
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
                  : item.additionalPrice + "$"}
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
