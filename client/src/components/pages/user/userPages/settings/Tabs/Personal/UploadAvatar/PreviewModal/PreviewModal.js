import React from "react";
import { Modal } from "antd";

import { ModalImg } from "./PreviewModal.styled";

const PreviewModal = ({
  avatar,
  imageURL,
  previewOpenHandler,
  cancelHandler,
}) => {
  return (
    <Modal
      open={previewOpenHandler}
      onCancel={cancelHandler}
      footer={null}
      title="Your avatar"
    >
      <ModalImg
        alt="modalimage"
        src={avatar ? process.env.REACT_APP_API_URL + avatar : imageURL}
      />
    </Modal>
  );
};

export default PreviewModal;
