import styled from "styled-components";
import { swiperStyles } from "../../../../../../styles/globalStyles";

import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";

export const SwiperContainer = styled.div`
  // it's the separate swiper styles
  // from global styles file
  ${swiperStyles}

  .swiper-slide {
    width: 410px;

    @media (max-width: ${viewport_sizes.m}px) {
      width: 80%;
    }
  }
`;
