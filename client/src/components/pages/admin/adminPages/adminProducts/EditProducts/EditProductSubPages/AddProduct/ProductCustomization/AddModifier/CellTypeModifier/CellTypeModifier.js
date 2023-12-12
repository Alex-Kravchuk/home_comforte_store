import React, { useEffect, useState } from "react";

import CellTypeModifierItem from "./CellTypeModifierItem";

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

  const defaultMarkerItemIndex = list.findIndex((item) => item.defaultMarker);

  console.log('list', list, defaultMarkerItemIndex);
  

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
        <CellTypeModifierItem
          index={index}
          data={modifier}
          key={modifier.id}
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

export default CellTypeModifier;
