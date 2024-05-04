import React, { useEffect, useState } from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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
      const locals = [];
      previewImages.map(({ description, originalFileObj }) => {
        getBase64(originalFileObj, (url) => {
          locals.push({
            src: url,
            description,
          });
        });
      });

      setLocalPrevImages(locals);
    }
  }, [previewImages]);

  // console.log("previewImages", previewImages, localPrevImages);

  return (
    <ProductPreviewWrapper>
      <ProductPreviewContainer>
        {previewImages.length === 0 ? (
          <Empty description="No preview images" />
        ) : (
          <Swiper navigation={true} modules={[Navigation]}>
            {localPrevImages.map(({ src, description }) => (
              <SwiperSlide key={src}>
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
