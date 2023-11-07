import React, { useEffect, useState } from "react";

import TileTypeModifierItem from "./TileTypeModifierItem";

import {
  ModifierContainer,
  ModifierList,
  ModifierWrapper,
} from "../Modifier/Modifier.styled";


const TileTypeModifier = ({
  list,
  removeHandler,
  cantAddNewModifier,
  saveChangesHandler,
}) => {
  const [modifiers, setModifiers] = useState([]);

  useEffect(() => {
    setModifiers(list);
  }, [list]);

  const saveModifierHandler = (newModifier) => {
    const editedModifierIndex = modifiers.findIndex(
      (item) => item.id === newModifier.id
    );

    const modifiersCopy = Object.assign([], modifiers);
    modifiersCopy.splice(editedModifierIndex, 1, newModifier);

    setModifiers(modifiersCopy);
    saveChangesHandler(modifiersCopy);
  };

  const removeModifierHandler = (removedItemID) => {
    const filteredItems = modifiers.filter((item) => item.id !== removedItemID);
    removeHandler(filteredItems);
    setModifiers(filteredItems);
  };

  

  return (
    <ModifierWrapper>
      <ModifierContainer>
        <ModifierList>
          {modifiers.map((modifier, index) => (
            <TileTypeModifierItem
              key={modifier.id}
              data={modifier}
              index={index}
              modifiers={modifiers}
              cantAddNewModifier={cantAddNewModifier}
              saveModifierHandler={saveModifierHandler}
              removeModifierHandler={removeModifierHandler}
            />
          ))}
        </ModifierList>
      </ModifierContainer>
    </ModifierWrapper>
  );
};

export default TileTypeModifier;
