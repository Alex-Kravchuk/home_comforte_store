import React, { useState } from "react";

// import { Scrollbar } from "swiper";
import { Scrollbar, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SimilarProductCard from "../SimilarProductCard/SimilarProductCard";
import { useGetWindowSize } from "../../../../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";

// import "./styles.css";

// import required modules
// import { Pagination } from "swiper/modules";

const SimilarProductsSwiper = ({ products }) => {
  const { width } = useGetWindowSize();
  const laptopScreen =
    width <= viewport_sizes.xxl && width >= viewport_sizes.xl;

  const mobileScreen = width <= viewport_sizes.ml;
  const tabletScreen = width <= viewport_sizes.l;

  const swiperConfig = {
    slidesPerView: laptopScreen || mobileScreen ? 1.5 : 2.5,
    spaceBetween: 15,
    scrollbar: {
      hide: true,
    },
    navigation: !tabletScreen,
    modules: [Scrollbar, Navigation],
  };
  return (
    <>
      <Swiper {...swiperConfig}>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <SimilarProductCard similarProduct={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SimilarProductsSwiper;
