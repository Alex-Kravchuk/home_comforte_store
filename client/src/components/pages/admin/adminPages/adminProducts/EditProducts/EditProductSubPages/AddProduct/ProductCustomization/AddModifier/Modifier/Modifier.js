import React, { useState } from "react";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import ListTypeModifier from "../ListTypeModifier/ListTypeModifier";
import TileTypeModifier from "../TileTypeModifier/TileTypeModifier";
import CellTypeModifier from "../CellTypeModifier/CellTypeModifier";

import {
  ModifierList,
  ModifierWrapper,
  ModifierContainer,
  AddNewModifierWrapper,
  AddNewModifierContainer,
} from "./Modifier.styled";

const Modifier = ({ id, data, displayMethod, saveChangesHandler }) => {
  const [cantAddNewModifier, setCantAddNewModifier] = useState(false);

  const listType = displayMethod === "list";
  const cellType = displayMethod === "cell";
  const tileType = displayMethod === "tile";

  const saveModifierHandler = (newModifiersItems) => {
    saveChangesHandler(id, newModifiersItems);
    setCantAddNewModifier(false);
  };

  const addNewModifierHandler = () => {
    const lastModifier = data[data.length - 1];

    // if the last of one modifier (active) has no img or title
    // it means we can't add a new modifier, so we throw error flag
    // in current modifier in list
    if (listType) {
      if (lastModifier?.img === null || lastModifier?.title === null) {
        setCantAddNewModifier(true);
        return;
      }
    }

    const newEmptyListTypeModifier = {
      id: data.length + 1,
      img: null,
      title: null,
      description: null,
    };

    const newEmptyCellTypeModifier = {
      id: data.length + 1,
      title: null,
      price: null,
    };

    const newEmptyTileTypeModifier = {
      id: data.length + 1,
      img: null,
      title: null,
      price: null,
      description: null,
    };

    const currentEmptyModifier = listType
      ? newEmptyListTypeModifier
      : cellType
      ? newEmptyCellTypeModifier
      : newEmptyTileTypeModifier;

    saveChangesHandler(id, [...data, currentEmptyModifier]);
  };

  const removeModifierHandler = (filteredItems) => {
    saveChangesHandler(id, filteredItems);
    setCantAddNewModifier(false);
  };

  return (
    <ModifierWrapper>
      <ModifierContainer>
        <ModifierList>
          {listType && (
            <ListTypeModifier
              list={data}
              removeHandler={removeModifierHandler}
              cantAddNewModifier={cantAddNewModifier}
              saveChangesHandler={saveModifierHandler}
            />
          )}
          {cellType && <CellTypeModifier list={data} />}
          {tileType && <TileTypeModifier list={data} />}
          <AddNewModifierWrapper onClick={addNewModifierHandler}>
            <AddNewModifierContainer>
              <AddOutlinedIcon />
            </AddNewModifierContainer>
          </AddNewModifierWrapper>
        </ModifierList>
      </ModifierContainer>
    </ModifierWrapper>
  );
};

export default Modifier;
