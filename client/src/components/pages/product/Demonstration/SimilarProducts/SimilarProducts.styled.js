import styled from "styled-components";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";
import { sizes } from "../../../../../utils/css_size_consts";
import { swiperStyles } from "../../../../../styles/globalStyles";

// SP = SimilarProducts

const { xl, m } = viewport_sizes;

export const SPWrapper = styled.div`
  width: 100%;
  max-width: 683px;

  @media (max-width: ${xl}px) {
    width: ${sizes.xl.contentContainerWidth}%;
  }

  ${swiperStyles};

  .swiper:hover {
    .swiper-button-next,
    .swiper-button-prev {
      opacity: 1;
      transition: all 0.5s ease;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    opacity: 0;
    background: rgba(0, 0, 0, 0.35);
    color: #fff;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 26px;
  }

  .swiper-button-disabled {
    background: rgba(0, 0, 0, 0.15);
  }
`;
export const SPContainer = styled.div``;

export const SPHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;
export const SPHeaderTitle = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.88);
  line-height: 1.6;
`;
export const SPHeaderRedirectButton = styled.div`
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  transition: all 0.2s ease;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.5);
    color: rgba(0, 0, 0);
  }

  @media (max-width: ${m}px) {
    font-size: 14px;
  }
`;

export const SPOffers = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0 20px;

  box-shadow: inset 0 0 2px 0.5px rgba(21, 21, 21, 0.05),
    inset 0 0 5px 0 rgba(21, 21, 21, 0.15);
    

  @media (max-width: ${m}px) {
    padding: 0;
    border: unset;
    box-shadow: unset;
  }
`;
