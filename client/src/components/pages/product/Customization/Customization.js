import React from "react";

import {
  CustomizationWrapper,
  CustomizationContainer,
} from "./Customization.styled";
import ProductHeader from "./ProductHeader/ProductHeader";
import { useGetWindowSize } from "../../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";
import Modifiers from "./Modifiers/Modifiers";
import CustomizationFooter from "./CustomizationFooter/CustomizationFooter";
import AddToCartButton from "./AddToCartButton/AddToCartButton";

const Customization = ({ generalData, previewMode }) => {
  const viewport = useGetWindowSize();
  const bigScreen = viewport.width >= viewport_sizes.xl;
  return (
    <CustomizationWrapper previewMode={previewMode}>
      <CustomizationContainer>
        {bigScreen && (
          <ProductHeader
            name={generalData?.subGeneral?.name}
            price={generalData?.subGeneral?.price}
          />
        )}
        <Modifiers />
        <AddToCartButton />
        <CustomizationFooter />
      </CustomizationContainer>
    </CustomizationWrapper>
  );
};

export default Customization;
