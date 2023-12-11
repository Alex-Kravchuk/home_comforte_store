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
        <ListTypeModifierItem
          key={modifier.id}
          data={modifier}
          modifiers={modifiers}
          index={index}
          cantAddNewModifier={cantAddNewModifier}
          saveModifierHandler={saveModifierHandler}
          removeModifierHandler={removeModifierHandler}
        />
      ))}
    </>
  );
};

export default ListTypeModifier;
