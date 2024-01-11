import React, {  useEffect, useState } from "react";

import Reviews from "./Reviews/Reviews";
import Demonstration from "./Demonstration/Demonstration";
import Customization from "./Customization/Customization";

import { useGetWindowSize } from "../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../utils/viewport_size_consts";
import { createDefaultFilters } from "../admin/adminPages/adminProducts/AddProduct/ProductImages/createDefaultFilters";
import { transformObjNamesToString } from "../../../helpers/transformObjNamesToString";

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
  const [currentFilters, setCurrentFilters] = useState({});
  const [currenViewerImages, setCurrentViewerImages] = useState([]);

  const vieport = useGetWindowSize();
  const bigScreen = vieport.width >= viewport_sizes.xl;

  useEffect(() => {
    setCurrentFilters(createDefaultFilters(customizationData));
  }, []);

  useEffect(() => {
    const currentFiltersInString = transformObjNamesToString(currentFilters);
    const viewer = viewerFiltersData.find(
      (view) => view.options === currentFiltersInString
    );

    if (viewer) {
      setCurrentViewerImages(viewer.images);
    }
  }, [currentFilters]);

  const filtersHandler = (modifierName, optionTitle) => {
    setCurrentFilters((state) => ({ ...state, [modifierName]: optionTitle }));
  };

  console.log("current filters", currentFilters);

  return (
    <ProductWrapper previewMode={previewMode}>
      <ProductContainer>
        <ProudctInfoSection>
          <Demonstration
            previewMode={previewMode}
            generalData={generalData}
            previewImages={previewImages}
            viewerImages={currenViewerImages}
          />
          {bigScreen && (
            <Customization
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
