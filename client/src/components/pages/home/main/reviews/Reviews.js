import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import ReviewItem from "./reviewItem/ReviewItem";

import {
  ReviewsTitle,
  ReviewsWrapper,
  ReviewsSubTitle,
} from "./Reviews.styled";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { reviewsItemConfig } from "./reviewItemsConfig";
import { useGetWindowSize } from "../../../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

const Reviews = () => {
  const viewport = useGetWindowSize();
  const smallScreen = viewport.width < viewport_sizes.ml;

  const swiperConfig = {
    centeredSlides: smallScreen ? true : false,
    slidesPerView: "auto",
    spaceBetween: 30,
    slidesOffsetBefore: smallScreen ? 0 : 20,
    slidesOffsetAfter: smallScreen ? 0 : 20,
    pagination: !smallScreen && { clickable: true },
    navigation: true,
    modules: [Pagination, Navigation],
    className: "mySwiper",
  };

  return (
    <ReviewsWrapper>
      <ReviewsTitle>Home Comfort in the real world</ReviewsTitle>
      <ReviewsSubTitle>
        We are happy to see our work in your home. We are pleased when you are
        delighted! Show us more of your options by tagging #hc and #homecomfort
      </ReviewsSubTitle>

      <Swiper
        {...swiperConfig}
      >
        {reviewsItemConfig.map(
          ({ userName, img, id, productName, reviewText }) => (
            <SwiperSlide key={id}>
              <ReviewItem
                srcImg={img}
                title={productName}
                userName={userName}
                reviewText={reviewText}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </ReviewsWrapper>
  );
};

export default Reviews;
