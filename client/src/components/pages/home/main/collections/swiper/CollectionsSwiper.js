import React from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { collections_config } from "../collections_config";
import CollectionsItem from "../collectionsItem/CollectionsItem";

import { SwiperContainer } from "./CollectionsSwiper.styled";

import "swiper/css";
import "swiper/css/navigation";

const CollectionsSwiper = () => {
  return (
    <SwiperContainer>
      <Swiper
        spaceBetween={30}
        slidesPerView={"auto"}
        slidesOffsetBefore={20}
        slidesOffsetAfter={20}
        navigation={true}
        modules={[Navigation]}
      >
        {collections_config.map((collection) => (
          <SwiperSlide>
            <CollectionsItem collection={collection} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default CollectionsSwiper;
