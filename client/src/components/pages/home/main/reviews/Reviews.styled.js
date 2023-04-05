import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

// for fuster writng it use snippet "sc"

const { m, l, ml } = viewport_sizes;

export const ReviewsWrapper = styled.div`
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;

  .swiper {
    width: 100%;
    height: 100%;
    padding: 50px 0;
  }

  .swiper-slide {
    width: 300px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: unset;
    color: #000;
    background: rgba(255, 255, 255, 0.9);
    padding: 10px;
    border-radius: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: #555759 !important;
  }

  @media (max-width: ${ml}px) {
    .swiper {
      padding: 25px 0;
    }
  }

  @media (max-width: ${m}px) {
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
export const ReviewsContainer = styled.div``;
export const ReviewsTitle = styled.div`
  color: #555759;
  text-align: center;
  padding: 70px 0 10px 0;
  font-size: ${getResponsiveFontSize(30, 28)};

  @media (max-width: ${l}px) {
    padding: 45px 15px 10px 15px;
  }
`;
export const ReviewsSubTitle = styled.div`
  color: #555759;
  text-align: center;
  padding: 0 15px 20px 15px;
  font-size: ${getResponsiveFontSize(16, 16)};

  @media (max-width: ${l}px) {
    padding: 0 20px 15px 20px;
  }
`;
