import React, { useEffect, useState } from "react";

import {
  Cell,
  CellPrice,
  CellTitle,
  CellTypeWrapper,
  CellTypeContainer,
} from "./CellType.styled";
import { getBase64 } from "../../../../../../helpers/getBase64";

const CellType = ({ data }) => {
  return (
    <CellTypeWrapper>
      <CellTypeContainer>
        {data.map((item) => (
          <Cell key={item.id}>
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
