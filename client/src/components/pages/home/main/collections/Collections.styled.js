import styled from "styled-components";

export const CollectionsWrapper = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 410px;

    @media (max-width: 425px) {
      width: 80%;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #000;
    background: rgba(255, 255, 255, .9);
    padding: 10px;
    border-radius: 10px;
  }

  @media (max-width: 425px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 24px;
      height: 34px;
    }

    .swiper-button-prev::after, .swiper-button-next::after {
   
      font-size: 34px;
    }
  }
`;
export const CollectionsContainer = styled.div``;
