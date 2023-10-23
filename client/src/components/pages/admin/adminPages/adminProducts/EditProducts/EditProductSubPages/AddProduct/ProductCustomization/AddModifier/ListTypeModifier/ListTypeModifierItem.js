import React, { useEffect, useRef, useState } from "react";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  ErrorContainer,
  LTMInterfaceIcons,
  LTMListItem,
  ModifieTitle,
  ModifierDescr,
} from "./ListTypeModifier.styled";
import ProductImagesUploading from "../../../ProductImages/ProductImagesUploading/ProductImagesUploading";
import { Input } from "antd";

const ListTypeModifierItem = ({ data, saveModifierHandler }) => {
  const [file, setFile] = useState(null);
  const [titleIsEmpty, setErrorTitle] = useState(false);
  const [fileIsEmpty, setErrorFile] = useState(false);

  const [editModeOn, setEditMode] = useState(true);
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

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

  console.log("File is empty", fileIsEmpty);

  return (
    <LTMListItem>
      <LTMInterfaceIcons>
        {editModeOn ? (
          <BookmarkAddedOutlinedIcon onClick={saveModifierChanges} />
        ) : (
          <EditOutlinedIcon onClick={editModeHandler} />
        )}

        <DeleteOutlineOutlinedIcon />
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
        <ModifieTitle>{titleInputRef.current.input.value}</ModifieTitle>
      )}

      {editModeOn ? (
        <Input
          ref={descriptionInputRef}
          placeholder="Description"
          size="small"
          defaultValue={data.description}
        />
      ) : (
        <ModifierDescr>{descriptionInputRef.current.input.value}</ModifierDescr>
      )}
    </LTMListItem>
  );
};

export default ListTypeModifierItem;
