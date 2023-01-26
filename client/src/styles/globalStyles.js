import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed&display=swap');

  body {
    background-color: #f9faf7;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 10000px;
`;
export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
`;
