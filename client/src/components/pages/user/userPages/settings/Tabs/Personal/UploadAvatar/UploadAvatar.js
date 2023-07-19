import { Avatar, Modal, Upload, message } from "antd";
import React, { useState } from "react";
import { getBase64 } from "../../../../../../../../helpers/getBase64";

import { UserOutlined } from "@ant-design/icons";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import {
  UploadButtonContainer,
  UploadButtonWrapper,
} from "./UploadAvatar.styled";
import { useSelector } from "react-redux";

const UploadAvatar = ({ saveFileHandler }) => {
  const { userData } = useSelector((state) => state.user);
  const [imageURL, setImageURL] = useState(userData.img);
  const [previewOpen, setPreviewOpen] = useState(false);

  const defaultFileList = userData.img
    ? [
        {
          uid: userData.id,
          name: userData.img,
          url: process.env.REACT_APP_API_URL + userData.img,
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
        listType="picture-card"
        // className="avatar-uploader"
        showUploadList={true}
        maxCount={1}
        accept="image/png, image/jpg, image/jpeg"
        defaultFileList={defaultFileList}
        onChange={handleChange}
        onRemove={onRemoveHandler}
        beforeUpload={beforeUpload}
        onPreview={onPreviewHandler}
      >
        {uploadButton}
      </Upload>
      <Modal open={previewOpen} onCancel={handleCancel} footer={null}>
        <img
          alt="example"
          style={{ width: "100%", height: "auto" }}
          src={process.env.REACT_APP_API_URL + imageURL}
        />
      </Modal>
    </>
  );
};

export default UploadAvatar;
