import React, { useEffect, useState } from "react";

import { Scrollbar, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useGetWindowSize } from "../../../../../../hooks/useGetWindowSize";

import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";

import {
  ModifierImg,
  ModifieTitle,
  ModifierDescr,
  ListTypeWrapper,
  ListTypeContainer,
  ModifierImgContainer,
  ListTypeModifierContainer,
  ModifierImgBorderContainer,
} from "./ListType.styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { getBase64 } from "../../../../../../helpers/getBase64";

const ListType = ({ data }) => {
  const [localTypeData, setLocalTypeData] = useState([]);
  const viewport = useGetWindowSize();

  useEffect(() => {
    data.map((listTypeItem, index) => {
      getBase64(listTypeItem.img, (url) => {
        setLocalTypeData((state) => [
          ...state,
          {
            src: url,
            title: listTypeItem.title,
            id: listTypeItem.id ?? index++,
            description: listTypeItem.description,
          },
        ]);
      });
    });
  }, []);

  const smallLaptopScreen = viewport.width <= viewport_sizes.xl;

  const swiperConfig = {
    slidesPerView: 4,
    spaceBetween: 15,
    scrollbar: {
      hide: true,
    },
    freemode: "true",
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
          localTypeData.map((item) => (
            <ListTypeModifierContainer key={item.id}>
              <ModifierImgContainer>
                <ModifierImg src={item.src} alt={item.title} />
                <ModifierImgBorderContainer />
              </ModifierImgContainer>
              <ModifieTitle>{item.title}</ModifieTitle>
              <ModifierDescr>{item.description}</ModifierDescr>
            </ListTypeModifierContainer>
          ))}

        {smallLaptopScreen && (
          <Swiper {...swiperConfig}>
            {localTypeData.map((item) => (
              <SwiperSlide key={item.id}>
                <ListTypeModifierContainer>
                  <ModifierImgContainer>
                    <ModifierImg src={item.src} alt={item.title} />
                    <ModifierImgBorderContainer />
                  </ModifierImgContainer>

                  <ModifieTitle>{item.title}</ModifieTitle>
                  <ModifierDescr>{item.description}</ModifierDescr>
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
