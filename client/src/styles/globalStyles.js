import styled, { createGlobalStyle } from "styled-components";
import { sizes } from "../utils/css_size_consts";
import { viewport_sizes } from "../utils/viewport_size_consts";

const { l, xl, xxl, m } = viewport_sizes;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  html, body {
    height: 100%;
    scroll-behavior: smooth;    
  font-family: 'Lato', sans-serif;
    color: #555759;
  }


  // loading spinner styles
  .ant-spin .ant-spin-dot-item {
    background-color: #408003;
  }

  .ant-spin-text {
    color: #408003;
    font-size: 18px;
  }


`;

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: ${xxl}px) {
    width: ${sizes.xxl.contentContainerWidth}%;
  }

  @media (max-width: ${xl}px) {
    width: ${sizes.xl.contentContainerWidth}%;
  }

  @media (max-width: ${l}px) {
    width: ${sizes.l.contentContainerWidth}%;
  }
`;

export const textColors = {
  main: "#555759",
  title: "#000000",
  productTitle: "#ffffff",
  plain: "#8f8f8f",
  svgColor: "rgba(0, 0, 0, 0.45)",
  svgHoverColor: "rgba(0, 0, 0, 0.65)",
};

export const swiperStyles = `
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-button-next,
.swiper-button-prev {
  box-sizing: unset;
  color: #000;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 10px;
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

export const marginConsts = `
margin-top: 55px;

@media (max-width: ${l}px) {
  margin-top: 45px;
}

@media (max-width: ${m}px) {
  margin-top: 35px;
}
`;

export const messageStyleConfig = {
  marginTop: "8vh",
};
