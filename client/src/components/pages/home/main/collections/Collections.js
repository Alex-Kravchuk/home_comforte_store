import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import { CollectionsWrapper } from "./Collections.styled";
import CollectionsItem from "./collectionsItem/CollectionsItem";
import { collections_config } from "./collections_config";

const Collections = () => {
  return (
    <CollectionsWrapper>
      <Swiper
        spaceBetween={30}
        slidesPerView={"auto"}
        slidesOffsetBefore={20}
        slidesOffsetAfter={20}
		navigation={true}
        // slidesPerView={1}
        // centeredSlides={true}
        // freeMode={true}
        modules={[Navigation]}
      >
        {collections_config.map((collection) => (
          <SwiperSlide>
            <CollectionsItem collection={collection} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CollectionsWrapper>
  );
};

export default Collections;
