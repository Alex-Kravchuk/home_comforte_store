import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";
import { swiperStyles } from "../../../../../styles/globalStyles";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

// for fuster writng it use snippet "sc"

const { l } = viewport_sizes;

export const ReviewsWrapper = styled.div`
// it's the separate swiper styles
// from global styles file
  ${swiperStyles}

  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;

  .swiper-slide {
    width: 280px;
  }

  .swiper-pagination-bullet-active {
    background-color: #555759 !important;
  }
`;
export const ReviewsContainer = styled.div``;
export const ReviewsTitle = styled.div`
  text-align: center;
  padding: 70px 0 10px 0;
  font-size: ${getResponsiveFontSize(30, 28)};

  @media (max-width: ${l}px) {
    padding: 45px 15px 10px 15px;
  }
`;
export const ReviewsSubTitle = styled.div`
  text-align: center;
  padding: 0 15px 30px 15px;
  font-size: ${getResponsiveFontSize(16, 16)};

  @media (max-width: ${l}px) {
    padding: 0 20px 15px 20px;
  }
`;
