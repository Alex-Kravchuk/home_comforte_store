import React from "react";
import { Container } from "../../../../../styles/globalStyles";
import {
  IntrDescrMadeIn,
  IntrDescrSubTitle,
  IntrDescrTitle,
  IntrDescrWrapper,
} from "./IntroductoryDescription.styled";

const IntroductoryDescription = () => {
  return (
    <IntrDescrWrapper>
      <Container>
        <IntrDescrTitle>
          Amazingly simple and exquisitely beautiful
        </IntrDescrTitle>
        <IntrDescrSubTitle>
          The furniture is designed for maximum coziness and comfort of use.
          Made of the highest quality materials.
        </IntrDescrSubTitle>
        <IntrDescrMadeIn>MADE IN UKRAINE</IntrDescrMadeIn>
      </Container>
    </IntrDescrWrapper>
  );
};

export default IntroductoryDescription;
