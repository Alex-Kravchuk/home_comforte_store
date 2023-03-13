import styled, { createGlobalStyle } from "styled-components";
import { sizes } from "../utils/css_size_consts";
import { viewport_sizes } from "../utils/vieport_size_consts";

const { l, xl, xxl } = viewport_sizes;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Lato&family=Roboto+Condensed&family=Roboto+Slab&display=swap');



  * {
    margin: 0;
    padding: 0;  
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Lato', sans-serif;
    
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 10000px;
`;

export const Container = styled.div`
  width: 75%;
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
