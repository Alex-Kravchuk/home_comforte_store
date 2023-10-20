import React, { useEffect } from "react";

import { Input, Tooltip } from "antd";
import { useSwiper } from "swiper/react";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import {
  SlideContainer,
  PIUploadSwiperImg,
  DescriptionContainer,
  CustomSlideDeleteIconContainer,
} from "../ProductPreviewImages.styled";

const CustomSwiperSlide = ({
  file,
  fileList,
  changeFileListHandler,
  saveDescriptionHandler,
}) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(fileList.length - 1, 500);
  }, [fileList]);

  const onRemoveItem = () => {
    changeFileListHandler(file.originalFileObj.uid);
  };
  

  return (
    <SlideContainer>
      <PIUploadSwiperImg src={file.url} />
      <DescriptionContainer>
        <Input
          size="small"
          placeholder="Write here..."
          maxLength={100}
          onBlur={(e) => saveDescriptionHandler(file.originalFileObj.uid, e.target.value)}
        />
      </DescriptionContainer>
      <CustomSlideDeleteIconContainer>
        <Tooltip title="Delete">
          <DeleteForeverIcon onClick={onRemoveItem} />
        </Tooltip>
      </CustomSlideDeleteIconContainer>
    </SlideContainer>
  );
};

export default CustomSwiperSlide;
