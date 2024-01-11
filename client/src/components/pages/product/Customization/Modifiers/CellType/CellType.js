import React, { useEffect, useState } from "react";

import {
  Cell,
  CellPrice,
  CellTitle,
  CellTypeWrapper,
  CellTypeContainer,
} from "./CellType.styled";

const CellType = ({
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
    <CellTypeWrapper>
      <CellTypeContainer>
        {data.map((item) => (
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
