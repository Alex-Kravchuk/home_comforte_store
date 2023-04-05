import styled from "styled-components";

import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";

export const SwiperContainer = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 410px;

    @media (max-width: ${viewport_sizes.m}px) {
      width: 80%;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: unset;
    color: #000;
    background: rgba(255, 255, 255, 0.9);
    padding: 10px;
    border-radius: 10px;
  }

  @media (max-width: ${viewport_sizes.m}px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 24px;
      height: 34px;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 34px;
    }
  }
`;
