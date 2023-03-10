import React from "react";
import Collections from "./collections/Collections";
import CustomContructor from "./customConstructor/CustomConstructor";

import { HomeMainWrapper } from "./HomeMain.styled";
import IntroductoryDescription from "./IntroductoryDescription/IntroductoryDescription";
import MainVideo from "./mainVideo/MainVideo";
import ProductList from "./productList/ProductList";

const HomeMain = () => {
  return (
    <HomeMainWrapper>
      <IntroductoryDescription />
      <MainVideo />
      <ProductList />
      <CustomContructor />
      <Collections />
    </HomeMainWrapper>
  );
};

export default HomeMain;
