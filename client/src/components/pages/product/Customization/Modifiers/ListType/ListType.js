import React from "react";

import { Scrollbar, Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { useGetWindowSize } from "../../../../../../hooks/useGetWindowSize";

import {
  ListTypeContainer,
  ListTypeModifierContainer,
  ListTypeWrapper,
  ModifieTitle,
  ModifierDescr,
  ModifierImg,
  ModifierImgBorderContainer,
  ModifierImgContainer,
} from "./ListType.styled";
import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";

const ListType = ({ data }) => {
  const viewport = useGetWindowSize();

  const smallLaptopScreen = viewport.width <= viewport_sizes.xl;

  const swiperConfig = {
    slidesPerView: 4,
    spaceBetween: 15,
    scrollbar: {
      hide: true,
    },
    freemode: true,
    modules: [Scrollbar, FreeMode],
    breakpoints: {
      490: {
        slidesPerView: 5,
      },
      590: {
        slidesPerView: 6,
      },
      690: {
        slidesPerView: 8,
      },
    },
  };

  return (
    <ListTypeWrapper>
      <ListTypeContainer>
        {!smallLaptopScreen &&
          data.map((item) => (
            <ListTypeModifierContainer key={item.id}>
              <ModifierImgContainer>
                <ModifierImg src={item.img} alt={item.title} />
                <ModifierImgBorderContainer />
              </ModifierImgContainer>

              <ModifieTitle>{item.title}</ModifieTitle>
              <ModifierDescr>{item.descr}</ModifierDescr>
            </ListTypeModifierContainer>
          ))}

        {smallLaptopScreen && (
          <Swiper {...swiperConfig}>
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <ListTypeModifierContainer>
                  <ModifierImgContainer>
                    <ModifierImg src={item.img} alt={item.title} />{" "}
                    <ModifierImgBorderContainer />
                  </ModifierImgContainer>

                  <ModifieTitle>{item.title}</ModifieTitle>
                  <ModifierDescr>{item.descr}</ModifierDescr>
                </ListTypeModifierContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </ListTypeContainer>
    </ListTypeWrapper>
  );
};

export default ListType;
