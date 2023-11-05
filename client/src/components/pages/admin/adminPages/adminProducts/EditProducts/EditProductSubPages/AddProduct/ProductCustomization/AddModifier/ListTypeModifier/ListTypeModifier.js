import React, { useEffect, useState } from "react";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import {
  LTMList,
  LTMAddNew,
  LTMWrapper,
  LTMContainer,
  LTMAddNewWrapper,
  LTMAddNewContainer,
} from "./ListTypeModifier.styled";
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

  console.log("modifiers", modifiers, "list", list);

  return (
    <LTMWrapper>
      <LTMContainer>
        <LTMList>
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
        </LTMList>
      </LTMContainer>
    </LTMWrapper>
  );
};

export default ListTypeModifier;
