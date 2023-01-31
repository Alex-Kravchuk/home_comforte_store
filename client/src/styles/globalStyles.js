import styled, { createGlobalStyle } from "styled-components";

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
`;
