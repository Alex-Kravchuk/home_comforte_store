import React, { useEffect, useState } from "react";

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
  const [currentFilters, setCurrentFilters] = useState();
  const [currenViewerImages, setCurrentViewerImages] = useState([]);

  const [currentFiltersForOrder, setCurrentFiltersForOrder] = useState();

  const vieport = useGetWindowSize();
  const bigScreen = vieport.width >= viewport_sizes.xl;

  useEffect(() => {
    // TODO there are no default markers
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
    setCurrentFilters((state) => ({
      ...state,
      [modifierName]: optionTitle,
    }));
  };

  console.log("current filters", currentFilters, viewerFiltersData);

  // TODO Якщо зміна параметру не впливає на зображення, то ігнорувати цю зміну (наприклад як Choose Size)

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

// TODO скачати різін фото з різними фільтрами та протестувати все, чи добре працює
// провести рефакторінг та написати коментарі до склданих ділянок коду
