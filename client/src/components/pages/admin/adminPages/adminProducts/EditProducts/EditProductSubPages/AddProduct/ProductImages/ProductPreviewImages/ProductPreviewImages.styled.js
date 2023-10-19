import styled from "@emotion/styled";

// PPI = ProductPreviewImages

export const PPIWrapper = styled.div``;

export const PPIContainer = styled.div``;

export const PIUploadContainer = styled.div`
  .swiper {
    max-width: 683px;
  }
`;
export const PIUploadSwiperImg = styled.img`
  width: 100%;
`;

export const SlideContainer = styled.div`
  position: relative;

  &:hover {
    &:last-child > div {
      opacity: 1;
    }
  }
`;

export const DescriptionContainer = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  width: 90%;
  z-index: 99;
  transform: translate(-50%, 0);
`;

export const CustomSlideDeleteIconContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  background: linear-gradient(
    360deg,
    rgba(21, 21, 21, 0) 0%,
    rgba(21, 21, 21, 0.5) 100%
  );
  transition: opacity 0.2s ease;

  opacity: 0;

  svg {
    position: relative;
    top: 10px;
    right: 10px;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }
`;
