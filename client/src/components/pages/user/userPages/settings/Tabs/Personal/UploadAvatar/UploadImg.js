import React, { useState } from "react";

import { Upload } from "antd";
import { useSelector } from "react-redux";

import { PlusOutlined } from "@ant-design/icons";
import { getBase64 } from "../../../../../../../../helpers/getBase64";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

import {
  SeparateLargeImg,
  SeparateLargeImgContainer,
  UploadButtonWrapper,
} from "./UploadImg.styled";
import PreviewModal from "./PreviewModal/PreviewModal";

const UploadImg = ({ separateLargeImg = false, saveFileHandler }) => {
  const { id, img } = useSelector((state) => state.user.userData);
  const [imageURL, setImageURL] = useState(img);
  const [previewOpen, setPreviewOpen] = useState(false);

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
        file.type === "image/png";

      if (!isValidFormat) {
        reject(console.log("Invalid image type"));
      } else {
        // return false for cancel default action post request
        resolve(false);
      }
    });
  };

  const handleChange = (info) => {
    console.log("start loading", info);

    if (info.file.status === "removed") {
      return;
    }

    getBase64(info.file, (url) => {
      setImageURL(url);
    });

    saveFileHandler(info.file);
  };

  const handleCancel = () => setPreviewOpen(false);

  const onPreviewHandler = () => {
    setPreviewOpen(true);
  };

  const onRemoveHandler = () => {
    setImageURL(null);
    saveFileHandler(null);
  };

  const uploadButton = (
    <UploadButtonWrapper>
      {imageURL ? <AutorenewOutlinedIcon /> : <PlusOutlined />}
    </UploadButtonWrapper>
  );

  return (
    <>
      <Upload
        name="avatar"
        maxCount={0}
        showUploadList={!separateLargeImg}
        listType="picture-card"
        accept="image/png, image/jpg, image/jpeg, image/webp"
        defaultFileList={defaultFileList}
        onChange={handleChange}
        onRemove={onRemoveHandler}
        beforeUpload={beforeUpload}
        onPreview={onPreviewHandler}
      >
        {uploadButton}
      </Upload>
      <PreviewModal
        previewOpenHandler={previewOpen}
        cancelHandler={handleCancel}
        avatar={img}
        imageURL={imageURL}
      />
      {separateLargeImg && (
        <SeparateLargeImgContainer>
          <SeparateLargeImg src={imageURL} />
        </SeparateLargeImgContainer>
      )}
      
    </>
  );
};

export default UploadImg;
