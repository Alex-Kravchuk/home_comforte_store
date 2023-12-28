import React, { useEffect, useState } from "react";

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
import { getBase64 } from "../../../../../helpers/getBase64";
import { Empty } from "antd";

const ProductPreview = ({ previewImages }) => {
  const [localPrevImages, setLocalPrevImages] = useState([]);

  useEffect(() => {
    if (previewImages.length > 0) {
      previewImages.map((previewItem, index) => {
        getBase64(previewItem.originalFileObj, (url) => {
          setLocalPrevImages((state) => [
            ...state,
            {
              id: previewItem.id ?? index++,
              src: url,
              description: previewItem.description,
            },
          ]);
        });
      });
    }
  }, []);

  return (
    <ProductPreviewWrapper>
      <ProductPreviewContainer>
        {previewImages.length === 0 ? (
          <Empty description="No preview images" />
        ) : (
          <Swiper navigation={true} modules={[Navigation]}>
            {localPrevImages.map(({ id, src, description }) => (
              <SwiperSlide key={id}>
                <SliderImg src={src} alt="prev" />
                <SlideDescription>{description}</SlideDescription>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </ProductPreviewContainer>
    </ProductPreviewWrapper>
  );
};

export default ProductPreview;
