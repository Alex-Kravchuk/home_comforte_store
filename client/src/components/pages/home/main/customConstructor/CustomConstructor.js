import React from "react";
import {
  CustomConstructorContainer,
  CustomConstructorWrapper,
} from "./CustomConstructor.styled";

import { Container } from "../../../../../styles/globalStyles";

import ConstructorMenu from "./constructorMenu/ConstructorMenu";
import ConstructorPresentation from "./constructorPresentation/ConstructorPresentation";

const CustomContructor = () => {
  return (
    <CustomConstructorWrapper>
      <Container>
        <CustomConstructorContainer>
          <ConstructorMenu />
          <ConstructorPresentation />
        </CustomConstructorContainer>
      </Container>
    </CustomConstructorWrapper>
  );
};

export default CustomContructor;
