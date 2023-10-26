import React, { useEffect, useRef, useState } from "react";

import { Input } from "antd";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import ProductImagesUploading from "../../../ProductImages/ProductImagesUploading/ProductImagesUploading";

import {
  LTMListItem,
  ModifieTitle,
  ModifierDescr,
  ErrorContainer,
  LTMInterfaceIcons,
} from "./ListTypeModifier.styled";

const ListTypeModifierItem = ({
  data,
  index,
  modifiers,
  cantAddNewModifier,
  saveModifierHandler,
  removeModifierHandler,
}) => {
  const [file, setFile] = useState(null);
  const [editModeOn, setEditMode] = useState(true);
  const [fileIsEmpty, setErrorFile] = useState(false);
  const [titleIsEmpty, setErrorTitle] = useState(false);

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const canotBeAddedNewModifierError =
    index === modifiers.length - 1 && cantAddNewModifier;

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
    <LTMListItem error={canotBeAddedNewModifierError}>
      <LTMInterfaceIcons>
        {editModeOn ? (
          <BookmarkAddedOutlinedIcon onClick={saveModifierChanges} />
        ) : (
          <EditOutlinedIcon onClick={editModeHandler} />
        )}

        <DeleteOutlineOutlinedIcon
          onClick={() => removeModifierHandler(data.id)}
        />
      </LTMInterfaceIcons>
      <ProductImagesUploading
        uploadType="modifier"
        saveFileHandler={setFile}
        editModeOn={editModeOn}
      />
      {fileIsEmpty && <ErrorContainer>You must upload an image</ErrorContainer>}

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
        <ModifieTitle>{data.title}</ModifieTitle>
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
    </LTMListItem>
  );
};

export default ListTypeModifierItem;
