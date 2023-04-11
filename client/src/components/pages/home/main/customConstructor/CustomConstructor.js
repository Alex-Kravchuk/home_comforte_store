import React, { useEffect, useRef, useState } from "react";

import ConstructorMenu from "./constructorMenu/ConstructorMenu";
import ConstructorTitle from "./constructorTitle/ConstructorTitle";
import ConstructorPresentation from "./constructorPresentation/ConstructorPresentation";

import { Container } from "../../../../../styles/globalStyles";

import {
  CustomConstructorWrapper,
  CustomConstructorContainer,
} from "./CustomConstructor.styled";

const CustomContructor = () => {
  const [sliderShift, setSliderShift] = useState(50);
  const [selectedItem, setSelectedItem] = useState(0);

  const sliderRef = useRef();

  useEffect(() => {
    const changePresentationHandler = (e) => {
      sliderRef.current.goTo(selectedItem, false);
      setSliderShift(50);
    };

    changePresentationHandler();
  }, [selectedItem]);

  return (
    <CustomConstructorWrapper>
      <Container>
        <ConstructorTitle />
        <CustomConstructorContainer>
          <ConstructorMenu
            selectedItem={selectedItem}
            setSelectedHandler={setSelectedItem}
          />
          <ConstructorPresentation
            selectedItem={selectedItem}
            sliderRef={sliderRef}
            sliderShift={sliderShift}
            setSliderShiftHandler={setSliderShift}
          />
        </CustomConstructorContainer>
      </Container>
    </CustomConstructorWrapper>
  );
};

export default CustomContructor;
