import React from "react";

import HomeMain from "./main/HomeMain";
import HomeHeader from "./header/HomeHeader";

import { HomeWrapper } from "./Home.styled";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeHeader />
      <HomeMain />
    </HomeWrapper>
  );
};

export default Home;
