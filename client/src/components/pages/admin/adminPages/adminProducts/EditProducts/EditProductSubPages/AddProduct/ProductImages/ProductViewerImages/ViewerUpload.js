import React from "react";

import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import Hint from "../ProductImagesUploading/Hint/Hint";
import ModalUploading from "../ProductImagesUploading/ModalUploading/ModalUploading";

const ViewerUpload = ({ config }) => {
  return (
    <>
      <Upload {...config}>
        {config.fileList.length !== 32 && <PlusOutlined />}
      </Upload>
      <Hint length={config.fileList.length} />
      <ModalUploading {...config} />
    </>
  );
};

export default ViewerUpload;
