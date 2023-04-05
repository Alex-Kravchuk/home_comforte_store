import React from "react";

import LeftSide from "./leftSide/LeftSide";
import RightSide from "./rightSide/RightSide";

import { MLWrapper, MLContainer } from "./MainLinks.styled";
import { Container } from "../../../../../styles/globalStyles";

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
