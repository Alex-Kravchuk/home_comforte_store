import React, { useEffect, useState } from "react";

import Reviews from "./Reviews/Reviews";
import Demonstration from "./Demonstration/Demonstration";
import Customization from "./Customization/Customization";

import {
  ProductWrapper,
  ProductContainer,
  ProudctInfoSection,
} from "./Product.styled";
import { useGetWindowSize } from "../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../utils/viewport_size_consts";
import { useLocation } from "react-router-dom";

const Product = ({
  generalData,
  previewImages,
  customizationData,
  previewMode = false,
}) => {
  const [selectedCustomOption, setSelectedCustomOption] = useState();

  useEffect(() => {
    setSelectedCustomOption(customizationData[0]?.items[0]);
  }, [customizationData]);

  const vieport = useGetWindowSize();
  const bigScreen = vieport.width >= viewport_sizes.xl;

  console.log("selected item", selectedCustomOption);

  return (
    <ProductWrapper previewMode={previewMode}>
      <ProductContainer>
        <ProudctInfoSection>
          <Demonstration
            previewMode={previewMode}
            generalData={generalData}
            previewImages={previewImages}
            selectedCustomOption={selectedCustomOption}
          />
          {bigScreen && (
            <Customization
              previewMode={previewMode}
              generalData={generalData}
              customizationData={customizationData}
              selectedOptionHandler={setSelectedCustomOption}
            />
          )}
        </ProudctInfoSection>
        {!previewMode && <Reviews />}
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Product;
