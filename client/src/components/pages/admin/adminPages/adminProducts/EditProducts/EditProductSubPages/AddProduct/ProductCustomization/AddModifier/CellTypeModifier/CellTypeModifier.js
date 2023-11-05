import React, { useState } from "react";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import {
  CTMAddNewContainer,
  CTMAddNewWrapper,
  CTMContainer,
  CTMList,
  CTMWrapper,
} from "./CellTypeModifier.styled";
import CellTypeModifierItem from "./CellTypeModifierItem";

const CellTypeModifier = () => {
  const [modifiers, setModifiers] = useState([
    // {
    //   id: 1,
    //   title: null,
    //   price: null,
    // },
    // {
    //   id: 2,
    //   title: null,
    //   price: null,
    // },
  ]);

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

  const addNewModifierHandler = () => {
    const lastModifier = modifiers[modifiers.length - 1];

    // if the last of one modifier (active) has no price or title
    // it means we can't add a new modifier, so we throw error flag
    // in current modifier in list
    if (lastModifier?.price === null || lastModifier?.title === null) {
      setCantAddNewModifier(true);
      return;
    }

    const newEmptyModifier = {
      id: modifiers.length + 1,
      price: null,
      title: null,
    };
    setModifiers((state) => [...state, newEmptyModifier]);
  };
  const removeModifierHandler = (removedItemID) => {
    setCantAddNewModifier(false);
    setModifiers((state) => state.filter((item) => item.id !== removedItemID));
  };
  
  return (
    <CTMWrapper>
      <CTMContainer>
        <CTMList>
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
          <CTMAddNewWrapper onClick={addNewModifierHandler}>
            <CTMAddNewContainer>
              <AddOutlinedIcon />
            </CTMAddNewContainer>
          </CTMAddNewWrapper>
        </CTMList>
      </CTMContainer>
    </CTMWrapper>
  );
};

export default CellTypeModifier;
