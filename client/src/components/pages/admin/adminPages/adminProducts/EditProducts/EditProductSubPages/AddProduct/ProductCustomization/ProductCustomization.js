import React, { useEffect, useState } from "react";

import { Collapse, Empty } from "antd";

import AddModifier from "./AddModifier/AddModifier";
import Modifier from "./AddModifier/Modifier/Modifier";
import ModifierTitle from "./AddModifier/ModifierTitle/ModifierTitle";
import TemporarySaveIcon from "../TemporarySaveIcon/TemporarySaveIcon";

import { AMList } from "./AddModifier/AddModifier.styled";
import { PCContainer, PCWrapper } from "./ProductCustomization.styled";

const ProductCustomization = ({ setDataHandler }) => {
  const [modifiers, setModifiers] = useState([]);

  const [collapseItems, setCollapseItems] = useState([]);

  const [customizationError, setCustomizationError] = useState(false);
  const [temporarilySaved, setTemporarilySaved] = useState(false);

  useEffect(() => {
    createModifierCollapseItem();
  }, [modifiers]);

  const onDeleteModifier = (modifierID) => {
    setModifiers((state) =>
      state.filter((modifier) => modifier.id !== modifierID)
    );
  };

  const onAddModifier = ({ name, displayMethod }) => {
    const newModifier = {
      id: modifiers.length + 1,
      name,
      displayMethod,
      furnitureId: 1,
      items: [],
    };

    setModifiers((state) => [...state, newModifier]);
  };

  const saveChangesHandler = (modifierId, newModifiersItems) => {
    const changedModifierItems = modifiers.map((mod) => {
      if (modifierId === mod.id) {
        mod.items = [...newModifiersItems];
        return mod;
      }
      return mod;
    });

    setModifiers(changedModifierItems);
  };

  const createModifierCollapseItem = () => {
    const items = modifiers.map(({ name, id, displayMethod, items }) => ({
      key: id,
      label: (
        <ModifierTitle
          id={id}
          name={name}
          displaymethod={displayMethod}
          deleteHandler={onDeleteModifier}
        />
      ),
      children: (
        <Modifier
          id={id}
          data={items}
          displayMethod={displayMethod}
          saveChangesHandler={saveChangesHandler}
        />
      ),
    }));

    setCollapseItems(items);
  };

  const saveCustomizationDataHandler = () => {
    if (modifiers.length < 1) {
      setCustomizationError(true);
      return;
    }

    setDataHandler(modifiers);
    setTemporarilySaved(true);
    setCustomizationError(false);
  };

  const resetCustomizationDataHandler = () => {
    setModifiers([]);
    setDataHandler([]);
  };

  return (
    <PCWrapper>
      <PCContainer>
        <TemporarySaveIcon
          error={customizationError}
          temporarySaveFlag={temporarilySaved}
          temporarilySaveHandler={setTemporarilySaved}
          saveDataHandler={saveCustomizationDataHandler}
          resetDataHandler={resetCustomizationDataHandler}
        />
        {collapseItems.length !== 0 ? (
          <AMList>
            <Collapse
              items={collapseItems}
              size="large"
              expandIconPosition="end"
            />
          </AMList>
        ) : (
          <Empty description="There are no customization modifiers" />
        )}

        <AddModifier onAddModifier={onAddModifier} />
      </PCContainer>
    </PCWrapper>
  );
};

export default ProductCustomization;
