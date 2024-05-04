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

const ListType = ({ currentModifier, filtersHandler }) => {
  const [localSelectedOption, setLocalSelectedOption] = useState(null);
  const viewport = useGetWindowSize();

  const smallLaptopScreen = viewport.width <= viewport_sizes.xl;

  const checkIfSelected = (item) => {
    if (!localSelectedOption && item.defaultMarker) {
      return true;
    }

    if (localSelectedOption?.id !== item.id && item.defaultMarker) {
      return false;
    }

    if (localSelectedOption?.id === item.id) {
      return true;
    }
  };

  const selectItemHandler = (item) => {
    setLocalSelectedOption(item);

    const additionalPrice = isNaN(item.additionalPrice)
      ? 0
      : Number(item.additionalPrice);

    filtersHandler(
      currentModifier.name,
      item.title,
      currentModifier.noAffectToDisplay,
      additionalPrice
    );
  };

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
          currentModifier.items.map((item) => (
            
            <ListTypeModifierContainer
              key={item.id}
              onClick={() => selectItemHandler(item)}
              selected={checkIfSelected(item)}
            >
              <ModifierImgContainer>
                <ModifierImg src={item.img.url} alt={item.title} />
                <ModifierImgBorderContainer />
              </ModifierImgContainer>

              <ModifieTitle>{item.title}</ModifieTitle>
              <ModifierDescr>{item.description}</ModifierDescr>
            </ListTypeModifierContainer>
          ))}

        {/* TODO Make the same logic when use small devices */}
        {smallLaptopScreen && (
          <Swiper {...swiperConfig}>
            {currentModifier.items.map((item) => (
              <SwiperSlide key={item.id}>
                <ListTypeModifierContainer>
                  <ModifierImgContainer>
                    <ModifierImg src={item.img.url} alt={item.title} />
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
