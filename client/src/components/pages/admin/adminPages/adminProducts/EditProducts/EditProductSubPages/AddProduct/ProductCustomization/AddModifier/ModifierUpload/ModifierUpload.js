import React from "react";

import { Upload } from "antd";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

import {
  SeparateLargeImg,
  SeparateLargeImgContainer,
} from "../../../ProductImages/ProductImagesUploading/ProductImagesUploading.styled";

import {
  ModifierUploadButtonWrapper,
  ModifierUploadWrapper,
} from "./ModifierUpload.styled";

const ModifierUpload = ({ config }) => {
  const uploadButton = (
    <ModifierUploadButtonWrapper>
      {config.localImageURL ? (
        <AutorenewOutlinedIcon />
      ) : (
        <FileUploadOutlinedIcon />
      )}
    </ModifierUploadButtonWrapper>
  );

  return (
    <ModifierUploadWrapper>
      <SeparateLargeImgContainer>
        <SeparateLargeImg src={config.localImageURL} />
      </SeparateLargeImgContainer>
      <Upload {...config}>{config.editModeOn && uploadButton}</Upload>
    </ModifierUploadWrapper>
  );
};

export default ModifierUpload;
