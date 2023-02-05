import React from "react";

import HomeMain from "./main/HomeMain";
import HomeHeader from "./header/HomeHeader";
import HomeFooter from "./footer/HomeFooter";
import { HomeWrapper } from "./Home.styled";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </HomeWrapper>
  );
};

export default Home;
