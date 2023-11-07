import React, { useRef, useState } from "react";

import { Input } from "antd";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { CTMText } from "./CellTypeModifier.styled";

import {
  InputsContainer,
  ModifierListItem,
  ModifierInterfaceIcons,
} from "../Modifier/Modifier.styled";

const CellTypeModifierItem = ({
  data,
  index,
  modifiers,
  cantAddNewModifier,
  saveModifierHandler,
  removeModifierHandler,
}) => {
  const [editModeOn, setEditMode] = useState(true);
  const [titleIsEmpty, setErrorTitle] = useState(false);
  const [priceIsEmpty, setErrorPrice] = useState(false);

  const titleInputRef = useRef();
  const priceInputRef = useRef();

  const canotBeAddedNewModifierError =
    index === modifiers.length - 1 && cantAddNewModifier;

  const saveModifierChanges = () => {
    const titleInputIsEmpty = titleInputRef.current.input.value.length === 0;
    const priceInputIsEmpty = priceInputRef.current.input.value.length === 0;

    if (!titleInputIsEmpty && !priceInputIsEmpty) {
      setEditMode(false);
      const newModifierData = {
        id: data.id,
        title: titleInputRef.current.input.value,
        price: priceInputRef.current.input.value,
      };

      saveModifierHandler(newModifierData);
      return;
    }

    if (titleInputIsEmpty) {
      setErrorTitle(true);
    }

    if (priceInputIsEmpty) {
      setErrorPrice(true);
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

  const priceInputOnChangeHanlder = (e) => {
    if (e.target.value.length === 0) {
      setErrorPrice(true);
      return;
    }
    setErrorPrice(false);
  };
  return (
    <ModifierListItem error={canotBeAddedNewModifierError} editModeOn={true}>
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
      <InputsContainer>
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
            placeholder="Price"
            size="small"
            status={priceIsEmpty && "error"}
            defaultValue={data.price}
            onChange={priceInputOnChangeHanlder}
          />
        ) : (
          <CTMText>{data.price}</CTMText>
        )}
      </InputsContainer>
    </ModifierListItem>
  );
};

export default CellTypeModifierItem;
