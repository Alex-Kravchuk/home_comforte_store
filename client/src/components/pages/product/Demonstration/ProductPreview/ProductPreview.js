import React from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { dataMock } from "./dataMock";
import {
  ProductPreviewContainer,
  ProductPreviewWrapper,
  SlideDescription,
  SliderImg,
} from "./ProductPreview.styled";

const ProductPreview = () => {
  return (
    <ProductPreviewWrapper>
      <ProductPreviewContainer>
        <Swiper navigation={true} modules={[Navigation]}>
          {dataMock.map(({ id, src, description }) => (
            <SwiperSlide key={id}>
              <SliderImg src={src} alt="prev" />
              <SlideDescription>{description}</SlideDescription>
            </SwiperSlide>
          ))}
        </Swiper>
      </ProductPreviewContainer>
    </ProductPreviewWrapper>
  );
};

export default ProductPreview;
