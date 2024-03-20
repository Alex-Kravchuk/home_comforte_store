import React, { useEffect, useState } from "react";

import Reviews from "./Reviews/Reviews";
import Demonstration from "./Demonstration/Demonstration";
import Customization from "./Customization/Customization";

import { useGetWindowSize } from "../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../utils/viewport_size_consts";
import { transformObjNamesToString } from "../../../helpers/transformObjNamesToString";
import { createDefaultFilters } from "../admin/adminPages/adminProducts/AddProduct/ProductImages/createDefaultFilters";

import {
  ProductWrapper,
  ProductContainer,
  ProudctInfoSection,
} from "./Product.styled";

const Product = ({
  generalData,
  previewImages,
  customizationData,
  viewerFiltersData,
  previewMode = false,
}) => {
  const [currentFilters, setCurrentFilters] = useState();
  const [currenViewerImages, setCurrentViewerImages] = useState([]);

  const [currentFiltersForOrder, setCurrentFiltersForOrder] = useState([]);

  const [totalPrice, setTotalPrice] = useState(generalData?.subGeneral?.price);

  const vieport = useGetWindowSize();
  const bigScreen = vieport.width >= viewport_sizes.xl;

  useEffect(() => {
    /**
     * I have divided the filters into two categories in order to use the filters that change the product image separately from the filters that keep the image unchanged
     *  */
    setCurrentFilters(createDefaultFilters(customizationData));
    setCurrentFiltersForOrder(createDefaultFilters(customizationData, true));
  }, []);

  useEffect(() => {
    // create a total price of all current filter options
    if (currentFiltersForOrder.length > 0) {
      const total = currentFiltersForOrder.reduce(
        (sum, filter) => sum + filter.additionalPrice,
        0
      );

      setTotalPrice(total + generalData?.subGeneral?.price);
    }
  }, [currentFiltersForOrder]);

  useEffect(() => {
    const currentFiltersInString = transformObjNamesToString(currentFilters);
    const viewer = viewerFiltersData.find(
      (view) => view.options === currentFiltersInString
    );

    if (viewer) {
      setCurrentViewerImages(viewer.images);
    }
  }, [currentFilters]);

  const filtersHandler = (
    modifierName,
    optionTitle,
    noAffectToDisplay,
    additionalPrice
  ) => {
    const updatedFilters = currentFiltersForOrder.map((filter) => {
      if (filter.hasOwnProperty(modifierName)) {
        filter[modifierName] = optionTitle;
        filter.additionalPrice = additionalPrice;

        return filter;
      }
      return filter;
    });

    setCurrentFiltersForOrder(updatedFilters);

    // we pass noAffectToDisplay flag from each type of modifiers and if it's true,
    // we don't write this filter to filters for display, only to order filters
    if (!noAffectToDisplay) {
      setCurrentFilters((state) => ({
        ...state,
        [modifierName]: optionTitle,
      }));
    }
  };

  console.log("filters for order:", currentFiltersForOrder);
  console.log("filters for display:", currentFilters);
  console.log("viewer filters data:", viewerFiltersData);

  return (
    <ProductWrapper previewMode={previewMode}>
      <ProductContainer>
        <ProudctInfoSection>
          <Demonstration
            totalPrice={totalPrice}
            previewMode={previewMode}
            generalData={generalData}
            previewImages={previewImages}
            viewerImages={currenViewerImages}
            customizationData={customizationData}
          />
          {bigScreen && (
            <Customization
              totalPrice={totalPrice}
              previewMode={previewMode}
              generalData={generalData}
              filtersHandler={filtersHandler}
              customizationData={customizationData}
            />
          )}
        </ProudctInfoSection>
        {!previewMode && <Reviews />}
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Product;