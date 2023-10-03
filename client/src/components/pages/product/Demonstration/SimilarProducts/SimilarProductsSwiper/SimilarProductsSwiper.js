import React, { useState } from "react";

// import { Scrollbar } from "swiper";
import { Scrollbar, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import "./styles.css";

// import required modules
// import { Pagination } from "swiper/modules";

const SimilarProductsSwiper = ({ products }) => {
//   const [swiper, setSwiper] = useState();
  //   const swiper = useSwiper();
  return (
    <>
      <Swiper
        slidesPerView={"2"}
        spaceBetween={30}
        scrollbar={{
          hide: true,
        }}
        navigation={true}
        modules={[Scrollbar, Navigation]}
        // onSwiper={(s) => setSwiper(s)}
      >
        <SwiperSlide style={{ height: 100, background: "lightblue" }}>
          Slide 1
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default SimilarProductsSwiper;
