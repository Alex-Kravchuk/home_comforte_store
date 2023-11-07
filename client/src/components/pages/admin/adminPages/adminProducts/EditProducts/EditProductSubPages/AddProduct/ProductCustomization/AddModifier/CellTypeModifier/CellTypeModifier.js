import React, { useEffect, useState } from "react";

import CellTypeModifierItem from "./CellTypeModifierItem";

import {
  ModifierList,
  ModifierWrapper,
  ModifierContainer,
} from "../Modifier/Modifier.styled";

const CellTypeModifier = ({
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
            <CellTypeModifierItem
              index={index}
              data={modifier}
              key={modifier.id}
              modifiers={modifiers}
              saveModifierHandler={saveModifierHandler}
              removeModifierHandler={removeModifierHandler}
              cantAddNewModifier={cantAddNewModifier}
            />
          ))}
        </ModifierList>
      </ModifierContainer>
    </ModifierWrapper>
  );
};

export default CellTypeModifier;
