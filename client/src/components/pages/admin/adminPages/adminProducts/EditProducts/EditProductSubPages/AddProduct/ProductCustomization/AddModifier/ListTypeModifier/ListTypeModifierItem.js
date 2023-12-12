import React, { useEffect, useRef, useState } from "react";

import { Checkbox, Input, Tooltip } from "antd";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";

import ProductImagesUploading from "../../../ProductImages/ProductImagesUploading/ProductImagesUploading";

import {
  ModifierDescr,
  ModifierTitle,
  ErrorContainer,
  ModifierListItem,
  ModifierInterfaceIcons,
  InputsContainer,
  DefaultModIconContainer,
  SpecialIconsContainer,
  DefaultTextContainer,
} from "../Modifier/Modifier.styled";

const ListTypeModifierItem = ({
  data,
  index,
  modifiers,
  cantAddNewModifier,
  saveModifierHandler,
  removeModifierHandler,
  defaultMarkerItemIndex,
}) => {
  const [file, setFile] = useState(null);
  const [editModeOn, setEditMode] = useState(true);
  const [fileIsEmpty, setErrorFile] = useState(false);
  const [titleIsEmpty, setErrorTitle] = useState(false);
  const [defaultMarker, setDefaultMarker] = useState(false);

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const canotBeAddedNewModifierError =
    index === modifiers.length - 1 && cantAddNewModifier;

  // checkbox is disabled if the list already has a certain element set by default
  const disabledCheckbox =
    index !== defaultMarkerItemIndex && defaultMarkerItemIndex >= 0;

  useEffect(() => {
    if (file) {
      setErrorFile(false);
    }
  }, [file]);

  const saveModifierChanges = () => {
    const titleInputIsEmpty = titleInputRef.current.input.value.length === 0;

    if (!titleInputIsEmpty && file) {
      setEditMode(false);
      const newModifierData = {
        id: data.id,
        img: file,
        title: titleInputRef.current.input.value,
        description: descriptionInputRef.current.input.value,
        defaultMarker,
      };

      saveModifierHandler(newModifierData);
      return;
    }

    if (titleInputIsEmpty) {
      setErrorTitle(true);
    }

    if (!file) {
      setErrorFile(true);
    }
  };

  const editModeHandler = () => {
    setEditMode(true);
  };

  const inputOnChangeHandler = (e) => {
    if (e.target.value.length === 0) {
      setErrorTitle(true);
      return;
    }

    setErrorTitle(false);
  };


  return (
    <ModifierListItem
      editModeOn={editModeOn}
      error={canotBeAddedNewModifierError}
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
      <ProductImagesUploading
        uploadType="modifier"
        saveFileHandler={setFile}
        editModeOn={editModeOn}
      />
      {fileIsEmpty && <ErrorContainer>You must upload an image</ErrorContainer>}
      <InputsContainer>
        {editModeOn ? (
          <Input
            size="small"
            placeholder="Title"
            ref={titleInputRef}
            status={titleIsEmpty && "error"}
            onChange={inputOnChangeHandler}
            defaultValue={data.title}
          />
        ) : (
          <ModifierTitle>{data.title}</ModifierTitle>
        )}

        {editModeOn ? (
          <Input
            ref={descriptionInputRef}
            placeholder="Description"
            size="small"
            defaultValue={data.description}
          />
        ) : (
          <ModifierDescr>{data.description}</ModifierDescr>
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

export default ListTypeModifierItem;
