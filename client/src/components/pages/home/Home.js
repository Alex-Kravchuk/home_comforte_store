import React from "react";

import HomeMain from "./main/HomeMain";
import HomeHeader from "./header/HomeHeader";

import { HomeWrapper } from "./Home.styled";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeHeader />
      <HomeMain />
    </HomeWrapper>
  );
};

export default Home;
