import React, { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";

import {
  getBase64,
  asyncGetBase64,
} from "../../../../../../../../helpers/getBase64";

import ViewerUpload from "../ProductViewerImages/ViewerUpload";
import DimensionUpload from "../../GeneralInfo/DimensionInfo/DimensionUpload";
import PreviewImagesUpload from "../ProductPreviewImages/PreviewImagesUpload/PreviewImagesUpload";
import ModifierUpload from "../../ProductCustomization/AddModifier/ModifierUpload/ModifierUpload";

const ProductImagesUploading = ({
  images,
  uploadType,
  saveFileHandler,
  uploadedFileList,
  editModeOn = false,
  existingImage = null,
  clearFileListHandler,
  checkFileListChanges,
  selectOptionsWasChanged,
  clearFileListflag = null,
}) => {
  const { id, img } = useSelector((state) => state.user.userData);

  const [fileList, setFileList] = useState([]);
  const [localImageURL, setImageURL] = useState(img);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

  const viewerTypeUpload = uploadType === "viewer";
  const previewTypeUpload = uploadType === "preview";
  const modifierTypeUpload = uploadType === "modifier";
  const dimensionTypeUpload = uploadType === "dimension";

  useEffect(() => {
    // clear file list when item of customization option was change by Select (in admin tools, adding of product images)
    setFileList([]);

    // if product contains images by current selected customization option we use those data
    // for display in fileList (in admin tools, adding of product images)
    if (uploadedFileList && selectOptionsWasChanged) {
      uploadedFileList.forEach((item) => {
        setFileList((state) => [...state, item]);
      });
    }
  }, [selectOptionsWasChanged]);

  useEffect(() => {
    // when something changes in fileList we change the state in the parent component indicating the changes,
    // so we need to save it again (in admin tools, adding of product images)

    if (checkFileListChanges) {
      checkFileListChanges(fileList);
    }
  }, [fileList]);

  useEffect(() => {
    if (!existingImage) {
      setImageURL(null);
    }
  }, [existingImage]);

  useEffect(() => {
    if (clearFileListflag) {
      clearFileListHandler(false);
      setFileList([]);
    }
  }, [clearFileListflag]);

  const defaultFileList = img
    ? [
        {
          uid: id,
          name: img,
          url: process.env.REACT_APP_API_URL + img,
        },
      ]
    : [];

  const beforeUpload = (file) => {
    return new Promise((resolve, reject) => {
      const isValidFormat =
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png" ||
        file.type === "image/webp" ||
        file.type === "image/svg+xml";

      if (!isValidFormat) {
        reject(console.log("Invalid image type"));
      } else {
        // return false for cancel default action post request
        resolve(false);
      }
    });
  };

  const handleChange = async (info) => {
    if (info.file.status === "removed") {
      return;
    }

    console.log(info.fileList);
    const url = await asyncGetBase64(info.file);
    setImageURL(url);

    if (viewerTypeUpload) {
      setFileList((state) => [...state, { originalFileObj: info.file }]);
      saveFileHandler({ originalFileObj: info.file });
      return;
    }

    //  BAG - файли додаються в хаотичному порядку. Потрібно очищати список, і з другого разу все працює правильно
    //  файли, які заходять в хендлер йдуть в правильному порядку. Значить проблема в асинхронному (і синхронному getBase64).
    //  якщо колись буде бажання то спробувати виправити таким чином, щоб забрати звіси getBase64,
    // і використовувати його на місцях, де він конретно потрібен


    // TODO
    // При редіректі, після створення продукту, для створення нового продукту не повністю очищаються дані від старого продукту
    // Покопатись десь в стейтах, які не чистяться




    // СТВОРИВ 3 продукти суукаблять
    if (modifierTypeUpload) {
      saveFileHandler({ originalFileObj: info.file, url });
      return;
    }

    if (previewTypeUpload) {
      setFileList((state) => [...state, { originalFileObj: info.file, url }]);
      saveFileHandler({ originalFileObj: info.file, description: "" });
      return;
    }

    if (dimensionTypeUpload) {
      saveFileHandler(info.file);
      return;
    }
  };

  const handleCancel = () => setPreviewOpen(false);

  const onPreviewHandler = (previewItem) => {
    setPreviewOpen(true);

    let selectedFileIndex;
    fileList.forEach((file, index) => {
      if (file.originalFileObj.uid === previewItem.uid) {
        selectedFileIndex = index;
      }
    });
    setCurrentPreviewIndex(selectedFileIndex);
  };

  const onRemoveHandler = (removedItem) => {
    setImageURL(null);

    setFileList((state) =>
      state.filter((file) => file.originalFileObj.uid !== removedItem.uid)
    );
  };

  const onDeletePrevHandler = (uid) => {
    const fileListWithoutRemovedItemWithDescr = images.filter(
      (file) => file.originalFileObj.uid !== uid
    );

    const fileListWithoutRemovedItem = fileList.filter(
      (file) => file.originalFileObj.uid !== uid
    );

    /**
     * 1. for saving images in parrnet component with description we use images array
     * 2. for correct display in swiper we use fileList array with localUrl and etc.
     */

    saveFileHandler(fileListWithoutRemovedItemWithDescr);

    setFileList(fileListWithoutRemovedItem);
  };

  const onBlurAndSaveDescriptionHandler = (uid, description) => {
    const filesMatch = images.map((file) => {
      if (file.originalFileObj.uid === uid) {
        return {
          originalFileObj: file.originalFileObj,
          description,
        };
      }

      return {
        originalFileObj: file.originalFileObj,
        description: file.description,
      };
    });

    saveFileHandler(filesMatch);
  };

  const dimensionUploadConfig = {
    maxCount: 1,
    multiple: false,
    showUploadList: false,
    listType: "picture-card",
    accept: "image/png, image/jpg, image/jpeg, image/webp",
    onChange: handleChange,
    onRemove: onRemoveHandler,
    onPreview: onPreviewHandler,
    fileList,
    beforeUpload,
    localImageURL,
    defaultFileList,
  };

  const viewerUploadConfig = {
    maxCount: 32,
    multiple: true,
    showUploadList: true,
    listType: "text",
    accept: "image/png, image/jpg, image/jpeg, image/webp",
    onChange: handleChange,
    onRemove: onRemoveHandler,
    onPreview: onPreviewHandler,
    cancelHandler: handleCancel,
    previewOpenHandler: previewOpen,
    fileList,
    beforeUpload,
    currentPreviewIndex,
  };

  const previewConfig = {
    maxCount: 5,
    multiple: true,
    showUploadList: false,
    listType: "picture-card",
    accept: "image/png, image/jpg, image/jpeg, image/webp",
    onChange: handleChange,
    onRemove: onRemoveHandler,
    onPreview: onPreviewHandler,
    fileList,
    beforeUpload,
    defaultFileList,
    changeFileListHandler: onDeletePrevHandler,
    saveDescriptionHandler: onBlurAndSaveDescriptionHandler,
  };

  const modifierConfig = {
    maxCount: 1,
    multiple: false,
    showUploadList: false,
    listType: "picture-card",
    accept: "image/png, image/jpg, image/jpeg, image/webp, image/svg+xml",
    onChange: handleChange,
    onRemove: onRemoveHandler,
    fileList,
    editModeOn,
    beforeUpload,
    localImageURL,
    defaultFileList,
  };

  return (
    <>
      {viewerTypeUpload && <ViewerUpload config={viewerUploadConfig} />}
      {dimensionTypeUpload && (
        <DimensionUpload config={dimensionUploadConfig} />
      )}
      {previewTypeUpload && <PreviewImagesUpload config={previewConfig} />}
      {modifierTypeUpload && <ModifierUpload config={modifierConfig} />}
    </>
  );
};

export default ProductImagesUploading;
