import React from "react";

import { Container } from "../../../../styles/globalStyles";
import { HomeMainWrapper } from "./HomeMain.styled";
import IntroductoryDescription from "./IntroductoryDescription/IntroductoryDescription";
import MainVideo from "./mainVideo/MainVideo";

const HomeMain = () => {
  return (
    <HomeMainWrapper>
      <IntroductoryDescription />
      <MainVideo />
    </HomeMainWrapper>
  );
};

export default HomeMain;
