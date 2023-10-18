import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { DescriptionContainer, PIUploadSwiperImg, SlideContainer } from "../ProductPreviewImages.styled";
import { Input } from "antd";

const CustomSwiperSlide = ({ file, fileList }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(fileList.length - 1, 100);
  }, [fileList]);

  return (
    <SlideContainer>
      <PIUploadSwiperImg src={file.url} />
      <DescriptionContainer>
        <Input size="small" placeholder="Write here..." maxLength={100} />
      </DescriptionContainer>
    </SlideContainer>
  );
};

export default CustomSwiperSlide;
