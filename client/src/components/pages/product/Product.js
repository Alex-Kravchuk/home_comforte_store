import React, { useCallback, useEffect, useState } from "react";

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
  const [selectedOption, setSelectedOption] = useState();

  const [filteredOptions, setFilteredOptions] = useState([]);

  const vieport = useGetWindowSize();
  const bigScreen = vieport.width >= viewport_sizes.xl;

  useEffect(() => {
    // I sort data by default marker. These items are default filter option for request to server
    const copy = JSON.stringify(customizationData);
    const modifiers = JSON.parse(copy).map((mod) => {
      mod.items = mod.items.filter((item) => item.defaultMarker === true);
      return mod;
    });
    // debugger;
    setFilteredOptions(modifiers);
  }, [customizationData]);

  useEffect(() => {
    console.log("filtered items was changed", filteredOptions);
  }, [filteredOptions]);

  const filterOptionsHandler = useCallback(
    (modifierID, option) => {
      // debugger;
      const updatedModifiers = filteredOptions.map((mod) => {
        if (mod.id === modifierID) {
          mod.items = [option];
        }
        return mod;
      });

      console.log("suka", option, modifierID, updatedModifiers);

      if (updatedModifiers.length > 0) {
        setFilteredOptions(updatedModifiers);
      }
    },
    [customizationData]
  );

  console.log("FILTERED:", filteredOptions);

  console.log("selected item", selectedOption);

  return (
    <ProductWrapper previewMode={previewMode}>
      <ProductContainer>
        <ProudctInfoSection>
          <Demonstration
            previewMode={previewMode}
            generalData={generalData}
            previewImages={previewImages}
            // modifierHandlers={modifierHandlers}
            selectedOption={selectedOption}
          />
          {bigScreen && (
            <Customization
              previewMode={previewMode}
              generalData={generalData}
              selectedOptionHandler={setSelectedOption}
              customizationData={customizationData}
              filterOptionsHandler={filterOptionsHandler}
              // selectedCustomOption={selectedCustomOption}
              // selectedOptionHandler={setSelectedCustomOption}
              // selectedCustomModifier={selectedCustomModifier}
              // selectedModifierHandler={setSelectedCustomModifier}
            />
          )}
        </ProudctInfoSection>
        {!previewMode && <Reviews />}
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Product;
