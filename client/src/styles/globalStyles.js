import styled, { createGlobalStyle } from "styled-components";
import { sizes } from "../utils/css_size_consts";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Roboto+Condensed&family=Roboto+Slab&display=swap');



  * {
    margin: 0;
    padding: 0;
    
  }

  body {
    background-color: #f9faf7;
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

  @media (max-width: ${sizes.xxl.width}px) {
    width: ${sizes.xxl.contentContainerWidth}%;
  }

  @media (max-width: ${sizes.xl.width}px) {
    width: ${sizes.xl.contentContainerWidth}%;
  }

  @media (max-width: ${sizes.l.width}px) {
    width: ${sizes.l.contentContainerWidth}%;
  }
`;
