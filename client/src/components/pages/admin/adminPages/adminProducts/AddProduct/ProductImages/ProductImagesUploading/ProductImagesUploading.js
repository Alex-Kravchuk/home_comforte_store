import React, { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";

import { getBase64 } from "../../../../../../../../helpers/getBase64";

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

  // console.log("upload file list", uploadedFileList);

  useEffect(() => {
    // clear file list when item of customization option was change by Select (in admin tools, adding of product images)
    setFileList([]);

    // if product contains images by current selected customization option we use those data 
    // for display in fileList (in admin tools, adding of product images)

 
    if (uploadedFileList && selectOptionsWasChanged) {
      uploadedFileList.forEach((item) => {
        getBase64(item, (url) => {
          setImageURL(url);
          setFileList((state) => [...state, { originalFileObj: item, url }]);
        });
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
      setFileList([]);
      clearFileListHandler(false);
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

  const handleChange = (info) => {
    if (info.file.status === "removed") {
      return;
    }

    getBase64(info.file, (url) => {
      setImageURL(url);
      setFileList((state) => [...state, { originalFileObj: info.file, url }]);

      if (viewerTypeUpload || modifierTypeUpload) {
        saveFileHandler({ originalFileObj: info.file, url });
      }
    });

    if (previewTypeUpload) {
      saveFileHandler({ originalFileObj: info.file, description: "" });
      return;
    }

    saveFileHandler(info.file);
  };

  const handleCancel = () => setPreviewOpen(false);

  const onPreviewHandler = (previewItem) => {
    setPreviewOpen(true);

    let selectedFileIndex;
    fileList.forEach((file, index) => {
      if (file.uid === previewItem.uid) {
        selectedFileIndex = index;
      }
    });
    setCurrentPreviewIndex(selectedFileIndex);
  };

  const onRemoveHandler = (removedItem) => {
    setImageURL(null);
    // saveFileHandler(null);
    setFileList((state) =>
      state.filter((file) => file.uid !== removedItem.uid)
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
    maxCount: 34,
    multiple: true,
    showUploadList: true,
    listType: "picture-card",
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
