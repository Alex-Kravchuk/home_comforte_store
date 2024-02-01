import React from "react";

import Modifiers from "./Modifiers/Modifiers";
import ProductHeader from "./ProductHeader/ProductHeader";
import AddToCartButton from "./AddToCartButton/AddToCartButton";
import CustomizationFooter from "./CustomizationFooter/CustomizationFooter";

import { useGetWindowSize } from "../../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";

import {
  CustomizationWrapper,
  CustomizationContainer,
} from "./Customization.styled";

const Customization = ({
  totalPrice,
  generalData,
  previewMode,
  customizationData = [],
  filtersHandler,
}) => {
  const viewport = useGetWindowSize();
  const bigScreen = viewport.width >= viewport_sizes.xl;
  return (
    <CustomizationWrapper previewMode={previewMode}>
      <CustomizationContainer>
        {bigScreen && (
          <ProductHeader
            name={generalData?.subGeneral?.name}
            price={totalPrice}
          />
        )}
        <Modifiers data={customizationData} filtersHandler={filtersHandler} />
        <AddToCartButton />
        <CustomizationFooter />
      </CustomizationContainer>
    </CustomizationWrapper>
  );
};

export default Customization;
