import React from "react";

import {
  CustomizationWrapper,
  CustomizationContainer,
} from "./Customization.styled";

const Customization = () => {
  return (
    <CustomizationWrapper>
      <CustomizationContainer>
        custom <button>click</button>
      </CustomizationContainer>
    </CustomizationWrapper>
  );
};

export default Customization;
