import styled from "styled-components";
import { swiperStyles } from "../../../../../styles/globalStyles";
import { sizes } from "../../../../../utils/css_size_consts";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

const { xl } = viewport_sizes;

export const ProductPreviewWrapper = styled.div`
  @media (max-width: ${xl}px) {
    width: ${sizes.xl.contentContainerWidth}%;
  }

  margin: 0 auto;
  max-width: 683px;

  max-height: 450px;

  ${swiperStyles};

  .swiper-button-next,
  .swiper-button-prev {
    background: rgba(0, 0, 0, 0.35);
    color: #fff;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 26px;
  }

  .swiper-slide {
    /* Center slide text vertically */
    // display: flex;
    // justify-content: center;
    // align-items: center;
    flex-shrink: 0;
    width: 100%;
    height: 100%;

    position: relative;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ProductPreviewContainer = styled.div`
  height: 100%;
  // margin: 0 25px;

  // @media (max-width: 1024px) {
  //   margin: 0;
  // }
`;

export const SliderImg = styled.img``;

export const SlideDescription = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);

  width: 100%;
  color: #fff;
  font-size: 14px;
  padding: 4px;

  background: linear-gradient(
    180deg,
    rgba(21, 21, 21, 0) 0%,
    rgba(21, 21, 21, 0.5) 100%
  );
`;
