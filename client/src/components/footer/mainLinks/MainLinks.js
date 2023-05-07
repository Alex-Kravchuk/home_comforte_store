import React from "react";

import LeftSide from "./leftSide/LeftSide";
import RightSide from "./rightSide/RightSide";
import { Container } from "../../../styles/globalStyles";

import { MLWrapper, MLContainer } from "./MainLinks.styled";

const MainLinks = () => {
  return (
    <MLWrapper>
      <Container>
        <MLContainer>
          <LeftSide />
          <RightSide />
        </MLContainer>
      </Container>
    </MLWrapper>
  );
};

export default MainLinks;
