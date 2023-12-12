import React, { useEffect, useState } from "react";

import ListTypeModifierItem from "./ListTypeModifierItem";

const ListTypeModifier = ({
  list,
  removeHandler,
  cantAddNewModifier,
  saveChangesHandler,
}) => {
  const [modifiers, setModifiers] = useState(list);

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

  console.log(
    "check by default",
    list.findIndex((item) => item.defaultMarker)
  );

  return (
    <>
      {modifiers.map((modifier, index) => (
        <ListTypeModifierItem
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

export default ListTypeModifier;
