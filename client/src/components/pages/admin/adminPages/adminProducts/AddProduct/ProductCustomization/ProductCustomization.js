import React, { useEffect, useState } from "react";

import { Collapse, Empty } from "antd";

import AddModifier from "./AddModifier/AddModifier";
import Modifier from "./AddModifier/Modifier/Modifier";
import ModifierTitle from "./AddModifier/ModifierTitle/ModifierTitle";
import TemporarySaveIcon from "../TemporarySaveIcon/TemporarySaveIcon";

import { errorHandlingHelper } from "./errorHandlingHelper";

import { AMList } from "./AddModifier/AddModifier.styled";
import { PCContainer, PCWrapper } from "./ProductCustomization.styled";

const ProductCustomization = ({ resetFields, setDataHandler }) => {
  const [modifiers, setModifiers] = useState([]);

  const [collapseItems, setCollapseItems] = useState([]);

  // this state handler is used to indicate that some product information
  // has been stored in the state of the parent component
  const [temporarilySaved, setTemporarilySaved] = useState(false);
  const [customizationError, setCustomizationError] = useState(false);

  useEffect(() => {
    if (resetFields) {
      setModifiers([]);
      setCollapseItems([]);
      setTemporarilySaved(false);
    }
  }, [resetFields]);

  useEffect(() => {
    setTemporarilySaved(false);
    setCustomizationError(false);
    createModifierCollapseItem();
  }, [modifiers]);

  const onDeleteModifier = (modifierID) => {
    setModifiers((state) =>
      state.filter((modifier) => modifier.id !== modifierID)
    );
  };

  const onAddModifier = ({ name, displayMethod }) => {
    // noAffectToDisplay flag needs for sort modifiers, if true - thoose modifiers only for order, if false - for viewer
    const newModifier = {
      name,
      items: [],
      displayMethod,
      noAffectToDisplay: false,
      id: modifiers.length + 1,

      // TODO IF ID IS NEEded
    };

    setModifiers((state) => [...state, newModifier]);
  };

  const displayAffectHandler = (id, value) => {
    const updatedData = modifiers.map((mod) => {
      if (mod.id === id) {
        mod.noAffectToDisplay = value;
        return mod;
      }

      return mod;
    });

    setModifiers(updatedData);
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
          displayAffectHandler={displayAffectHandler}
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
    const error = errorHandlingHelper(modifiers);

    if (error) {
      setCustomizationError(error);
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
