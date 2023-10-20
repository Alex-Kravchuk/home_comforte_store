import React, { useState } from "react";

import { Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { UploadButtonWrapper } from "../../../../../../../../../user/userPages/settings/Tabs/Personal/UploadAvatar/UploadImg.styled";
import {
  DescriptionContainer,
  PIUploadContainer,
  PIUploadSwiperImg,
  PIUploadWrapper,
  SlideContainer,
} from "../ProductPreviewImages.styled";
import CustomSwiperSlide from "./CustomSwiperSlide";

const PreviewImagesUpload = ({ config }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const uploadButton = (
    <UploadButtonWrapper>
      <PlusOutlined />
    </UploadButtonWrapper>
  );

  return (
    <>
      <PIUploadWrapper>
        <Upload {...config}>{uploadButton}</Upload>
      </PIUploadWrapper>

      <PIUploadContainer>
        <Swiper
          initialSlide={activeSlideIndex}
          onSlideChange={(slide) => setActiveSlideIndex(slide.activeIndex)}
          navigation={true}
          modules={[Navigation]}
        >
          {config.fileList.map((file) => (
            <SwiperSlide key={file.originalFileObj.uid}>
              <CustomSwiperSlide
                file={file}
                fileList={config.fileList}
                changeFileListHandler={config.changeFileListHandler}
                saveDescriptionHandler={config.saveDescriptionHandler}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </PIUploadContainer>
    </>
  );
};

export default PreviewImagesUpload;
