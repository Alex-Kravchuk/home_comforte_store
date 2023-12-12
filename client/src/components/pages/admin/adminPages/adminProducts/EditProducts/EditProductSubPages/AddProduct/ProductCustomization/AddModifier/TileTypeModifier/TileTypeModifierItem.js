import React, { useEffect, useRef, useState } from "react";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import {
  DefaultTextContainer,
  ErrorContainer,
  ModifierInterfaceIcons,
  ModifierListItem,
  ModifierTitle,
} from "../Modifier/Modifier.styled";
import ProductImagesUploading from "../../../ProductImages/ProductImagesUploading/ProductImagesUploading";
import { Checkbox, Input } from "antd";
import {
  ModifierBodyWrapper,
  TileModifierDescr,
  TileModifierTitle,
  TileUploadImgWrapper,
} from "./TileTypeModifier.styled";

const TileTypeModifierItem = ({
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
  const [priceIsEmpty, setErrorPrice] = useState(false);
  const [titleIsEmpty, setErrorTitle] = useState(false);
  const [defaultMarker, setDefaultMarker] = useState(false);

  const priceInputRef = useRef();
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
    const priceInputIsEmpty = priceInputRef.current.input.value.length === 0;

    if (file && !priceInputIsEmpty && !titleInputIsEmpty) {
      setEditMode(false);
      const newModifierData = {
        id: data.id,
        img: file,
        price: priceInputRef.current.input.value,
        title: titleInputRef.current.input.value,
        description:
          descriptionInputRef.current.resizableTextArea.textArea.value,
        defaultMarker,
      };

      saveModifierHandler(newModifierData);
      return;
    }

    if (!file) {
      setErrorFile(true);
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
    <ModifierListItem
      error={canotBeAddedNewModifierError}
      editModeOn={editModeOn}
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

      <ModifierBodyWrapper>
        {editModeOn ? (
          <Input
            size="small"
            placeholder="Title"
            ref={titleInputRef}
            defaultValue={data.title}
            status={titleIsEmpty && "error"}
            onChange={titleInputOnChangeHandler}
          />
        ) : (
          <TileModifierTitle>{data.title}</TileModifierTitle>
        )}
        {editModeOn ? (
          <Input
            size="small"
            placeholder="Price"
            ref={priceInputRef}
            defaultValue={data.price}
            status={priceIsEmpty && "error"}
            onChange={priceInputOnChangeHanlder}
          />
        ) : (
          <ModifierTitle>{data.price}</ModifierTitle>
        )}
        <TileUploadImgWrapper file={file}>
          <ProductImagesUploading
            uploadType="modifier"
            saveFileHandler={setFile}
            editModeOn={editModeOn}
          />
          {fileIsEmpty && (
            <ErrorContainer>You must upload an image</ErrorContainer>
          )}
        </TileUploadImgWrapper>

        {editModeOn ? (
          <Input.TextArea
            size="small"
            ref={descriptionInputRef}
            placeholder="Description"
            defaultValue={data.description}
          />
        ) : (
          <TileModifierDescr>{data.description}</TileModifierDescr>
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
      </ModifierBodyWrapper>
    </ModifierListItem>
  );
};

export default TileTypeModifierItem;
