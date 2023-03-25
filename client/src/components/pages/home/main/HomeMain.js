import React from "react";
import Collections from "./collections/Collections";
import CustomContructor from "./customConstructor/CustomConstructor";

import { HomeMainWrapper } from "./HomeMain.styled";
import IntroductoryDescription from "./IntroductoryDescription/IntroductoryDescription";
import MainVideo from "./mainVideo/MainVideo";
import OwnConstruction from "./ownConstruction/OwnConstruction";
import ProductList from "./productList/ProductList";

const HomeMain = () => {
  return (
    <HomeMainWrapper>
      <IntroductoryDescription />
      <MainVideo />
      <ProductList />
      <CustomContructor />
      <Collections />
      <OwnConstruction />
    </HomeMainWrapper>
  );
};

export default HomeMain;
