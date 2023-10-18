import React, { useEffect, useState } from "react";

import { Button, Form, Upload } from "antd";
import { useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

import { getBase64 } from "../../../../../../../../../../helpers/getBase64";

import ModalUploading from "./ModalUploading/ModalUploading";

import {
  SeparateLargeImg,
  SeparateLargeImgContainer,
} from "./ProductImagesUploading.styled";

import { UploadButtonWrapper } from "../../../../../../../../user/userPages/settings/Tabs/Personal/UploadAvatar/UploadImg.styled";
import Hint from "./Hint/Hint";

const ProductImagesUploading = ({
  moreThanOne = false,
  separateLargeImg = false,
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
    // console.log("start loading", info.file.uid);

    if (info.file.status === "removed") {
      return;
    }

    getBase64(info.file, (url) => {
      setImageURL(url);

      console.log("SPECIAL LOG", info.file, url);

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
    // console.log("removed item", removedItem);

    setImageURL(null);
    saveFileHandler(null);
    setFileList((state) =>
      state.filter((file) => file.uid !== removedItem.uid)
    );
  };

  const uploadButton = (
    <UploadButtonWrapper>
      {localImageURL ? <AutorenewOutlinedIcon /> : <PlusOutlined />}
    </UploadButtonWrapper>
  );

  return (
    <>
      <Upload
        name="avatar"
        maxCount={moreThanOne ? 32 : 1}
        showUploadList={!separateLargeImg}
        listType="picture-card"
        accept="image/png, image/jpg, image/jpeg, image/webp"
        defaultFileList={defaultFileList}
        onChange={handleChange}
        onRemove={onRemoveHandler}
        beforeUpload={beforeUpload}
        onPreview={onPreviewHandler}
        multiple={true}
        fileList={fileList}
      >
        {fileList.length !== 32 && (
          <>{moreThanOne ? <PlusOutlined /> : uploadButton}</>
        )}
      </Upload>
      {!separateLargeImg && <Hint length={fileList.length} />}
      <ModalUploading
        previewOpenHandler={previewOpen}
        cancelHandler={handleCancel}
        files={fileList}
        currentPreviewIndex={currentPreviewIndex}
      />
      {separateLargeImg && (
        <SeparateLargeImgContainer>
          <SeparateLargeImg src={localImageURL} />
        </SeparateLargeImgContainer>
      )}
    </>
  );
};

export default ProductImagesUploading;
