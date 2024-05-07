import React, { useEffect, useState } from "react";

import {
  Cell,
  CellPrice,
  CellTitle,
  CellTypeWrapper,
  CellTypeContainer,
} from "./CellType.styled";

const CellType = ({ currentModifier, filtersHandler }) => {
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
    <CellTypeWrapper>
      <CellTypeContainer>
        {currentModifier.items.map((item) => (
          <Cell
            key={item.id}
            onClick={() => selectItemHandler(item)}
            selected={checkIfSelected(item)}
          >
            <CellTitle>{item.title}</CellTitle>
            <CellPrice>
              {isNaN(item.additionalPrice)
                ? item.additionalPrice
                : item.additionalPrice + "$"}
            </CellPrice>
          </Cell>
        ))}
      </CellTypeContainer>
    </CellTypeWrapper>
  );
};

export default CellType;
