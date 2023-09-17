import React from "react";

import {
  CustomizationWrapper,
  CustomizationContainer,
} from "./Customization.styled";
import ProductHeader from "./ProductHeader/ProductHeader";
import { useGetWindowSize } from "../../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";
import Modifiers from "./Modifiers/Modifiers";

const Customization = () => {
  const viewport = useGetWindowSize();
  const bigScreen = viewport.width >= viewport_sizes.xl;
  return (
    <CustomizationWrapper>
      <CustomizationContainer>
        {bigScreen && <ProductHeader />}
        <Modifiers />
      </CustomizationContainer>
    </CustomizationWrapper>
  );
};

export default Customization;
