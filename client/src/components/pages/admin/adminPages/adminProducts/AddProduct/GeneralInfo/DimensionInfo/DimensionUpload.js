import React from "react";

import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

import {
  SeparateLargeImg,
  SeparateLargeImgContainer,
} from "../../ProductImages/ProductImagesUploading/ProductImagesUploading.styled";
import { UploadButtonWrapper } from "../../../../../../user/userPages/settings/Tabs/Personal/UploadAvatar/UploadImg.styled";

const DimensionUpload = ({ config }) => {
  const uploadButton = (
    <UploadButtonWrapper>
      {config.localImageURL ? <AutorenewOutlinedIcon /> : <PlusOutlined />}
    </UploadButtonWrapper>
  );

  return (
    <>
      <Upload {...config}>{uploadButton}</Upload>
      <SeparateLargeImgContainer>
        <SeparateLargeImg src={config.localImageURL} />
      </SeparateLargeImgContainer>
    </>
  );
};

export default DimensionUpload;
