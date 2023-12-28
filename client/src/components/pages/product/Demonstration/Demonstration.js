import React, { useState } from "react";

import { images } from "./ProductViewer/imagesForTest";

import { viewport_sizes } from "../../../../utils/viewport_size_consts";

import { useGetWindowSize } from "../../../../hooks/useGetWindowSize";

import ZoomBox from "./ZoomBox/ZoomBox";
import ProductViewer from "./ProductViewer/ProductViewer";
import Customization from "../Customization/Customization";
import ProductPreview from "./ProductPreview/ProductPreview";
import ProductHeader from "../Customization/ProductHeader/ProductHeader";
import ViewerToggleButton from "./ViewerToggleButton/VIewerToggleButton";

import {
  ViewerContainer,
  DemonstrationWrapper,
  DemonstrationContainer,
} from "./Demonstration.styled";
import ProductDetails from "./ProductDetails/ProductDetails";
import SimilarProducts from "./SimilarProducts/SimilarProducts";

const Demonstration = ({
  generalData,
  previewImages = [],
  previewMode = false,
}) => {
  const [zoomOn, setZoomOn] = useState(false);
  const zoomHandler = () => setZoomOn((state) => !state);

  const viewport = useGetWindowSize();

  const tabletScreen = viewport.width < viewport_sizes.l;
  const smallLaptopScreen = viewport.width < viewport_sizes.xl;

  const viewerMode = zoomOn ? (
    <ZoomBox />
  ) : (
    <ProductViewer images={images} zoomHandler={zoomHandler} />
  );

  return (
    <DemonstrationWrapper>
      <DemonstrationContainer>
        {smallLaptopScreen && (
          <ProductHeader
            name={generalData.subGeneral.name}
            price={generalData.subGeneral.price}
          />
        )}
        <ViewerContainer>
          {viewerMode}
          {tabletScreen && (
            <ViewerToggleButton zoomOn={zoomOn} zoomHandler={zoomHandler} />
          )}
          {smallLaptopScreen && <Customization />}

          <ProductPreview previewImages={previewImages} />
        </ViewerContainer>
        <ProductDetails
          dimension={generalData?.dimension}
          descriptionText={generalData?.subGeneral?.description}
        />
        {!previewMode && <SimilarProducts />}
      </DemonstrationContainer>
    </DemonstrationWrapper>
  );
};

export default Demonstration;
