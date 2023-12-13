import React, { useRef, useState } from "react";

import { Checkbox, Input } from "antd";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { CTMText } from "./CellTypeModifier.styled";

import {
  InputsContainer,
  ModifierListItem,
  ModifierInterfaceIcons,
  DefaultTextContainer,
  ModifierPrice,
} from "../Modifier/Modifier.styled";

const CellTypeModifierItem = ({
  data,
  index,
  modifiers,
  cantAddNewModifier,
  saveModifierHandler,
  removeModifierHandler,
  defaultMarkerItemIndex,
}) => {
  const [editModeOn, setEditMode] = useState(true);
  const [titleIsEmpty, setErrorTitle] = useState(false);
  const [defaultMarker, setDefaultMarker] = useState(false);

  const titleInputRef = useRef();
  const priceInputRef = useRef();

  const canotBeAddedNewModifierError =
    index === modifiers.length - 1 && cantAddNewModifier;

  // checkbox is disabled if the list already has a certain element set by default
  const disabledCheckbox =
    index !== defaultMarkerItemIndex && defaultMarkerItemIndex >= 0;

  const saveModifierChanges = () => {
    const titleInputIsEmpty = titleInputRef.current.input.value.length === 0;

    if (!titleInputIsEmpty) {
      setEditMode(false);
      const newModifierData = {
        id: data.id,
        defaultMarker,
        title: titleInputRef.current.input.value,
        additionalPrice: priceInputRef.current.input.value,
      };

      saveModifierHandler(newModifierData);
      return;
    }

    if (titleInputIsEmpty) {
      setErrorTitle(true);
    }
  };

  const editModeHandler = () => {
    setEditMode(true);
  };

  const titleInputOnChangeHandler = (e) => {
    if (e.target.value.length === 0) {
      setErrorTitle(true);
      return;
    }

    setErrorTitle(false);
  };

  return (
    <ModifierListItem
      error={canotBeAddedNewModifierError}
      editModeOn={true}
      cellType={true}
    >
      <ModifierInterfaceIcons>
        {editModeOn ? (
          <BookmarkAddedOutlinedIcon onClick={saveModifierChanges} />
        ) : (
          <EditOutlinedIcon onClick={editModeHandler} />
        )}

        <DeleteOutlineOutlinedIcon
          onClick={() => removeModifierHandler(data.id)}
        />
      </ModifierInterfaceIcons>
      <InputsContainer cellType={true}>
        {editModeOn ? (
          <Input
            size="small"
            placeholder="Title"
            ref={titleInputRef}
            status={titleIsEmpty && "error"}
            onChange={titleInputOnChangeHandler}
            defaultValue={data.title}
          />
        ) : (
          <CTMText>{data.title}</CTMText>
        )}

        {editModeOn ? (
          <Input
            ref={priceInputRef}
            placeholder="Additional price"
            size="small"
            defaultValue={data.additionalPrice}
          />
        ) : (
          <ModifierPrice>
            {data.additionalPrice
              ? data.additionalPrice + "$"
              : data.additionalPrice}
          </ModifierPrice>
        )}

        {editModeOn && (
          <Checkbox
            checked={defaultMarker}
            disabled={disabledCheckbox}
            onChange={(e) => setDefaultMarker(e.target.checked)}
          >
            set by default
          </Checkbox>
        )}

        {defaultMarker && !editModeOn && (
          <DefaultTextContainer>selected by default</DefaultTextContainer>
        )}
      </InputsContainer>
    </ModifierListItem>
  );
};

export default CellTypeModifierItem;
