import React from "react";

import { Container } from "../../../../styles/globalStyles";
import { HomeWrapper } from "../Home.styled";
import IntroductoryDescription from "./IntroductoryDescription/IntroductoryDescription";

const HomeMain = () => {
  return (
    <HomeWrapper>
      <Container>
        <IntroductoryDescription />
      </Container>
    </HomeWrapper>
  );
};

export default HomeMain;
