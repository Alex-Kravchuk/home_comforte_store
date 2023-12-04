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
} from "../../../../../../../../../user/userPages/settings/Tabs/Personal/UploadAvatar/PreviewModal/PreviewModal.styled";

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
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlideFileName = fileList[activeSlideIndex]?.originalFileObj.name;

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
          {fileList.map((file) => (
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
