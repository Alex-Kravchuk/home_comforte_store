import React, { useState } from "react";

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

const ListTypeModifier = () => {
  const [modifiers, setModifiers] = useState([]);
  const [cantAddNewModifier, setCantAddNewModifier] = useState(false);

  const saveModifierHandler = (newModifier) => {
    const editedModifierIndex = modifiers.findIndex(
      (item) => item.id === newModifier.id
    );

    const modifiersCopy = Object.assign([], modifiers);
    modifiersCopy.splice(editedModifierIndex, 1, newModifier);

    setModifiers(modifiersCopy);
    setCantAddNewModifier(false);
  };

  const adNewModifierHandler = () => {
    const lastModifier = modifiers[modifiers.length - 1];

    // if the last of one modifier (active) has no img or title
    // it means we can't add a new modifier, so we throw error flag
    // in current modifier in list
    if (lastModifier?.img === null || lastModifier?.title === null) {
      setCantAddNewModifier(true);
      return;
    }

    const newEmptyModifier = {
      id: modifiers.length + 1,
      img: null,
      title: null,
      description: null,
    };
    setModifiers((state) => [...state, newEmptyModifier]);
  };

  const removeModifierHandler = (removedItemID) => {
    setCantAddNewModifier(false);
    setModifiers((state) => state.filter((item) => item.id !== removedItemID));
  };

  console.log("modifiers", modifiers);

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

          <LTMAddNewWrapper onClick={adNewModifierHandler}>
            <LTMAddNewContainer>
              <AddOutlinedIcon />
            </LTMAddNewContainer>
          </LTMAddNewWrapper>
        </LTMList>
      </LTMContainer>
    </LTMWrapper>
  );
};

export default ListTypeModifier;
