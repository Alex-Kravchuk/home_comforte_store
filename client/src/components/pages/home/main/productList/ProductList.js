import React from "react";

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import { product_list_config } from "./product_list_config";
import { useGetWindowSize } from "../../../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

import "swiper/css";
import "swiper/css/navigation";

import {
  ProductListItemContainer,
  ProductListItemImage,
  ProductListItemImageContainer,
  ProductListItemTitle,
  ProductListWrapper,
} from "./ProductList.styled";

const ProductList = () => {
  const viewport = useGetWindowSize();

  const mobileScreen = viewport.width < viewport_sizes.m;
  const mediumScreen = viewport.width < viewport_sizes.ml;
  const tabletScreen = viewport.width < viewport_sizes.l;
  const smallDesctopScreen = viewport.width < viewport_sizes.xl;

  const swiperConfig = {
    spaceBetween: 10,
    slidesPerView: mobileScreen
      ? 2
      : mediumScreen
      ? 3
      : tabletScreen
      ? 4
      : smallDesctopScreen
      ? 5
      : 6,
    slidesOffsetAfter: mobileScreen ? 0 : 60,
    slidesOffsetBefore: mobileScreen ? 0 : 60,
    navigation: true,
    modules: [Navigation],
    centeredSlides: mobileScreen,
  };

  // here I use static product list (not form database) just for display
  // all of actual product in store are in side or main menu

  return (
    <ProductListWrapper>
      <Swiper {...swiperConfig}>
        {product_list_config.map(({ title, img, id }) => (
          <SwiperSlide key={id}>
            <ProductListItemContainer>
              <ProductListItemImageContainer>
                <ProductListItemImage src={img} />
              </ProductListItemImageContainer>
              <ProductListItemTitle>{title}</ProductListItemTitle>
            </ProductListItemContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </ProductListWrapper>
  );
};

export default ProductList;
