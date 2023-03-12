import React, { useEffect, useRef, useState } from "react";
import {
  CustomConstructorContainer,
  CustomConstructorWrapper,
} from "./CustomConstructor.styled";

import { Container } from "../../../../../styles/globalStyles";

import ConstructorTitle from "./constructorTitle/ConstructorTitle";
import ConstructorMenu from "./constructorMenu/ConstructorMenu";
import ConstructorPresentation from "./constructorPresentation/ConstructorPresentation";
import { Button } from "antd";

const CustomContructor = () => {
  const [sliderShift, setSliderShift] = useState(50);
  const [selectedItem, setSelectedItem] = useState(1);
  const sliderRef = useRef();

  useEffect(() => {
    const index = selectedItem - 1;

    const changePresentationHandler = (e) => {
      sliderRef.current.goTo(index, false);
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
