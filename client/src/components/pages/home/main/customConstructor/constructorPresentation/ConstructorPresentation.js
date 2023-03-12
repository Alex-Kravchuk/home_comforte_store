import React, { useRef, useState } from "react";
import {
  CPContainer,
  CPImg,
  CPImgLowerContainer,
  CPImgUpperContainer,
  CPThumb,
  CPWrapper,
  ExploreTipArrow,
  ExploreTipContainer,
  ExploreTipText,
  OptionDescrptionContainer,
  OptionDescrptionItem,
  PresentationItem,
} from "./ConstructorPresentation.styled";

import { Carousel } from "antd";

import Thumb from "./Thumb";
import { constructor_menu_config } from "../../../../../../utils/constructor_menu_config";
import ExploreHint from "./exploreHint/ExploreHint";

const ConstructorPresentation = ({
  sliderShift,
  setSliderShiftHandler,
  sliderRef,
}) => {
  const changeWidthHandler = (e) => setSliderShiftHandler(e.target.value);
  return (
    <CPWrapper>
      <Carousel
        ref={sliderRef}
        effect="fade"
        dots={false}
        adaptiveHeight
        swipe={false}
      >
        {constructor_menu_config.map((option) => (
          <PresentationItem key={option.id}>
            <CPContainer>
              <CPImgUpperContainer>
                <CPImg src={option.upperImg} />
              </CPImgUpperContainer>
              <CPImgLowerContainer width={sliderShift}>
                <CPImg src={option.lowerImg} />
              </CPImgLowerContainer>
              <Thumb onChnageHandler={changeWidthHandler} shift={sliderShift} />
            </CPContainer>
            <OptionDescrptionContainer>
              <OptionDescrptionItem>
                {option.upperDescription}
              </OptionDescrptionItem>
              <OptionDescrptionItem>
                {option.lowerDescription}
              </OptionDescrptionItem>
            </OptionDescrptionContainer>
          </PresentationItem>
        ))}
      </Carousel>
      <ExploreHint />
    </CPWrapper>
  );
};

export default ConstructorPresentation;
