import React, { useState } from "react";

import { Carousel } from "antd";

import { constructor_menu_config } from "../../../../../../utils/constructor_menu_config";

import Thumb from "./thumb/Thumb";
import ExploreHint from "./exploreHint/ExploreHint";

import {
  CPImg,
  CPWrapper,
  CPContainer,
  PresentationItem,
  CPImgLowerContainer,
  CPImgUpperContainer,
  OptionDescriptionItem,
  OptionDescriptionContainer,
} from "./ConstructorPresentation.styled";

const ConstructorPresentation = ({
  sliderRef,
  sliderShift,
  setSliderShiftHandler,
}) => {
  const [hideHint, setHideHint] = useState(false);

  const changeWidthHandler = (e) => {
    setSliderShiftHandler(e.target.value);
    setHideHint(true);
  };

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
            <OptionDescriptionContainer>
              <OptionDescriptionItem>
                {option.upperDescription}
              </OptionDescriptionItem>
              <OptionDescriptionItem>
                {option.lowerDescription}
              </OptionDescriptionItem>
            </OptionDescriptionContainer>
          </PresentationItem>
        ))}
      </Carousel>
      <ExploreHint hideHint={hideHint} />
    </CPWrapper>
  );
};

export default ConstructorPresentation;
