import React from "react";

import {
  Cell,
  CellPrice,
  CellTitle,
  CellTypeWrapper,
  CellTypeContainer,
} from "./CellType.styled";

const CellType = ({ data }) => {
  return (
    <CellTypeWrapper>
      <CellTypeContainer>
        {data.map((item) => (
          <Cell key={item.id}>
            <CellTitle>{item.title}</CellTitle>
            <CellPrice>{item.price}</CellPrice>
          </Cell>
        ))}
      </CellTypeContainer>
    </CellTypeWrapper>
  );
};

export default CellType;
