import React from "react";

import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import Hint from "../ProductImagesUploading/Hint/Hint";
import ModalUploading from "../ProductImagesUploading/ModalUploading/ModalUploading";
import { UploadButtonWrapper } from "./ProductViewerImages.styled";

const ViewerUpload = ({ config }) => {
  // we get originals files from fileList (originalFileObj)
  // for correct work of upload file list
  const originalFiles = config.fileList.map((file) => file.originalFileObj);

  return (
    <>
      <Hint length={originalFiles.length} />
      <Upload {...config} fileList={originalFiles}>
        {originalFiles.length !== config.maxCount && (
          <UploadButtonWrapper>
            <PlusOutlined />
          </UploadButtonWrapper>
        )}
      </Upload>

      <ModalUploading {...config} />
    </>
  );
};

export default ViewerUpload;
