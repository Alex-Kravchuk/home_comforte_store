import React from "react";

import { Modal } from "antd";
import { ModalImg, ModalWrapper } from "./PreviewModal.styled";

const PreviewModal = ({
  img,
  localImageURL,
  previewOpenHandler,
  cancelHandler,
}) => {

  return (
    <ModalWrapper>
      <Modal
        open={previewOpenHandler}
        onCancel={cancelHandler}
        footer={null}
        title="Your image"
      >
        <ModalImg
          alt="modalimage"
          src={img ? process.env.REACT_APP_API_URL + img : localImageURL}
        />
      </Modal>
    </ModalWrapper>
  );
};

export default PreviewModal;
