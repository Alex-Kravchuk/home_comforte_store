import React, { useEffect, useState } from "react";

import TileTypeModifierItem from "./TileTypeModifierItem";

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

  const defaultMarkerItemIndex = list.findIndex((item) => item.defaultMarker);

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
    <>
      {modifiers.map((modifier, index) => (
        <TileTypeModifierItem
          key={modifier.id}
          data={modifier}
          index={index}
          modifiers={modifiers}
          cantAddNewModifier={cantAddNewModifier}
          saveModifierHandler={saveModifierHandler}
          removeModifierHandler={removeModifierHandler}
          defaultMarkerItemIndex={defaultMarkerItemIndex}
        />
      ))}
    </>
  );
};

export default TileTypeModifier;
