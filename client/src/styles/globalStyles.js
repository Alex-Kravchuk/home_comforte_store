import styled, { createGlobalStyle } from "styled-components";

import { sizes } from "../utils/css_size_consts";
import { viewport_sizes } from "../utils/viewport_size_consts";

const { l, xl, xxl, m, s } = viewport_sizes;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  html, body {
    /**
     * I use it !important with width
     * because when I show modal somwhere
     * added 17px to body width. I don't know how it fix 
     * *//

    width: 100% !important;
    scroll-behavior: smooth;    
    font-family: 'Lato', sans-serif;
    color: #555759;

    ::-webkit-scrollbar{
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.45);
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.65);
    }
  }

   body:fullscreen::backdrop {
    background-color: #fff;
  }



  // loading spinner styles
  .ant-spin .ant-spin-dot-item {
    background-color: #408003;
  }

  .ant-spin-text {
    color: #408003;
    font-size: 18px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: unset;
    color: #000;
    background: rgba(255, 255, 255, 0.9);
    padding: 10px;
    border-radius: 10px;
  }


`;

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  .ant-btn.ant-btn-lg {
    padding: 15px 40px;
    height: auto;
  }

  .ant-btn-lg:hover {
    background-color: #8e9482;
  }

  .ant-btn-primary {
    background-color: #acb39b;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
  }

  // these selectors must be written like this to work correctly
  .ant-select-single.ant-select-lg .ant-select-selector {
    height: 50px;
    line-height: 45px;
  }

  .ant-select-single.ant-select-lg .ant-select-selection-placeholder {
    line-height: 45px;
  }

  .ant-select-single.ant-select-lg.ant-select-show-arrow
    .ant-select-selection-item {
    line-height: 45px;
  }

  @media (max-width: ${s}px) {
    .ant-btn-primary {
      padding: 25px;
      font-size: 16px;
    }
  }

  @media (max-width: ${m}px) {
    .ant-btn.ant-btn-lg {
      padding: 12px 30px;
      height: auto;
    }
  }
`;

export const Container = styled.div`
  width: ${sizes.global.contentContainerWidth}%;
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
