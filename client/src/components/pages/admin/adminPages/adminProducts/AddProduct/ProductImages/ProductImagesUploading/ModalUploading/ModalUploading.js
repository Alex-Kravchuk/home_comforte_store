import React, { useEffect, useState } from "react";

import { Modal } from "antd";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import {
  ModalImg,
  ModalWrapper,
} from "../../../../../../../user/userPages/settings/Tabs/Personal/UploadAvatar/PreviewModal/PreviewModal.styled";
import { asyncGetBase64 } from "../../../../../../../../../helpers/getBase64";

const DisplayedPreview = ({ currentPreviewIndex, children }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(currentPreviewIndex, 100);
  }, [currentPreviewIndex]);
  return children;
};

const ModalUploading = ({
  fileList = [],
  currentPreviewIndex,
  previewOpenHandler,
  cancelHandler,
}) => {
  const [localFileList, setLocalFileList] = useState([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlideFileName = localFileList[activeSlideIndex]?.originalFileObj?.name;

  useEffect(() => {
    if (fileList.length) {
      createFileListWithURLs();
    }
  }, [fileList]);

  const createFileListWithURLs = async () => {
    setLocalFileList(
      await Promise.all(
        fileList.map(async ({ originalFileObj }) => ({
          originalFileObj,
          url: await asyncGetBase64(originalFileObj),
        }))
      )
    );
  };

  return (
    <ModalWrapper>
      <Modal
        open={previewOpenHandler}
        onCancel={cancelHandler}
        footer={null}
        title={activeSlideFileName}
      >
        <Swiper
          initialSlide={currentPreviewIndex}
          navigation={true}
          modules={[Navigation]}
          onSlideChange={(slide) => setActiveSlideIndex(slide.activeIndex)}
        >
          <DisplayedPreview currentPreviewIndex={currentPreviewIndex} />
          {localFileList.map((file) => (
            <SwiperSlide key={file.url}>
              <ModalImg alt="modalimage" src={file.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
    </ModalWrapper>
  );
};

export default ModalUploading;
