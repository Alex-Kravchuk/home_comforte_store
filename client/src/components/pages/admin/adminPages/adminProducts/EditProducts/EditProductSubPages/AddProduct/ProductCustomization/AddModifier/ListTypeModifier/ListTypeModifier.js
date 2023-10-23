import React, { useState } from "react";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import {
  LTMList,
  LTMAddNew,
  LTMWrapper,
  LTMContainer,
} from "./ListTypeModifier.styled";
import ListTypeModifierItem from "./ListTypeModifierItem";

const ListTypeModifier = () => {
  const [modifiers, setModifiers] = useState([
    {
      id: 1,
      img: null,
      title: null,
      description: null,
    },
  ]);

  const saveModifierHandler = (newModifier) => {
    const editedModifierIndex = modifiers.findIndex(
      (item) => item.id === newModifier.id
    );

    const modifiersCopy = Object.assign([], modifiers);
    modifiersCopy.splice(editedModifierIndex, 1, newModifier);

    // console.log("index", modifierCopy);

    setModifiers(modifiersCopy);
  };

  console.log("modifiers", modifiers);

  return (
    <LTMWrapper>
      <LTMContainer>
        <LTMList>
          {modifiers.map((modifier) => (
            <ListTypeModifierItem
              key={modifier.id}
              data={modifier}
              saveModifierHandler={saveModifierHandler}
            />
          ))}

          <LTMAddNew>
            <AddOutlinedIcon />
          </LTMAddNew>
        </LTMList>
      </LTMContainer>
    </LTMWrapper>
  );
};

export default ListTypeModifier;
