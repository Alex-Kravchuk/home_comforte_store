import React from "react";

import { Carousel } from "antd";

import {
  HomeHeaderImg,
  HomeHeaderWrapper,
  HomeHeaderImgContainer,
  HomeHeaderInscriptionTitle,
  HomeHeaderInscriptionContainer,
  HomeHeaderInscriptionDiscription,
} from "./HomeHeader.styled";

import { home_header_slider_config } from "../../../../utils/home_header_slider_config";

const HomeHeader = () => {
  return (
    <HomeHeaderWrapper>
      <Carousel
        autoplay
        effect="fade"
        easing="cubic-bezier(0.12, 0, 0.39, 0)"
        autoplaySpeed={10000}
      >
        {home_header_slider_config.map((item) => (
          <HomeHeaderImgContainer key={item.id}>
            <HomeHeaderInscriptionContainer
              position={item.position}
              textPosition={item.textPosition}
            >
              <HomeHeaderInscriptionTitle>
                {item.inscriptionTitle}
              </HomeHeaderInscriptionTitle>
              <HomeHeaderInscriptionDiscription>
                {item.inscriptionSubTitle}
              </HomeHeaderInscriptionDiscription>
            </HomeHeaderInscriptionContainer>
            <picture>
              <source srcSet={item.mobileImg} media={item.mediaQuery.mobile} />
              <source srcSet={item.tabletImg} media={item.mediaQuery.tablet} />
              <HomeHeaderImg src={item.desktopImg} />
            </picture>
          </HomeHeaderImgContainer>
        ))}
      </Carousel>
    </HomeHeaderWrapper>
  );
};

export default HomeHeader;
