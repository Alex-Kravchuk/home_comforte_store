import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { getBase64 } from "../../../../../../../../../../helpers/getBase64";

import ViewerUpload from "../ProductViewerImages/ViewerUpload";
import DimensionUpload from "../../GeneralInfo/DimensionInfo/DimensionUpload";

const ProductImagesUploading = ({
  uploadType,
  saveFileHandler,
  clearFileListflag = null,
  clearFileListHandler,
}) => {
  const { id, img } = useSelector((state) => state.user.userData);
  const [localImageURL, setImageURL] = useState(img);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

  useEffect(() => {
    if (clearFileListflag !== null) {
      setFileList([]);
      clearFileListHandler(true);
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
      console.log("file type", file.type);

      const isValidFormat =
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png" ||
        file.type === "image/webp";

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
      setFileList((state) => [
        ...state,
        { ...info.file, name: info.file.name, url },
      ]);
    });

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
    saveFileHandler(null);
    setFileList((state) =>
      state.filter((file) => file.uid !== removedItem.uid)
    );
  };

  const dimensionTypeUpload = uploadType === "dimension";
  const viewerTypeUpload = uploadType === "viewer";

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
    listType: "picture-card",
    accept: "image/png, image/jpg, image/jpeg, image/webp",
    onChange: handleChange,
    onRemove: onRemoveHandler,
    onPreview: onPreviewHandler,
    cancelHandler: handleCancel,
    previewOpenHandler: previewOpen,
    fileList,
    beforeUpload,
    defaultFileList,
    currentPreviewIndex,
  };

  return (
    <>
      {viewerTypeUpload && <ViewerUpload config={viewerUploadConfig} />}
      {dimensionTypeUpload && (
        <DimensionUpload config={dimensionUploadConfig} />
      )}
    </>
  );
};

export default ProductImagesUploading;
