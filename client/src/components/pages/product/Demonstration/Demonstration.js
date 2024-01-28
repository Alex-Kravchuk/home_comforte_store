import React, { useEffect, useState } from "react";

import { images } from "./ProductViewer/imagesForTest";

import { viewport_sizes } from "../../../../utils/viewport_size_consts";

import { useGetWindowSize } from "../../../../hooks/useGetWindowSize";

import ZoomBox from "./ZoomBox/ZoomBox";
import ProductViewer from "./ProductViewer/ProductViewer";
import Customization from "../Customization/Customization";
import ProductPreview from "./ProductPreview/ProductPreview";
import ProductHeader from "../Customization/ProductHeader/ProductHeader";
import ViewerToggleButton from "./ViewerToggleButton/VIewerToggleButton";

import ProductDetails from "./ProductDetails/ProductDetails";
import SimilarProducts from "./SimilarProducts/SimilarProducts";

import {
  ViewerContainer,
  DemonstrationWrapper,
  DemonstrationContainer,
} from "./Demonstration.styled";

const Demonstration = ({
  generalData,
  viewerImages,
  previewImages = [],
  previewMode = false,
}) => {
  const [localImages, setLocalImages] = useState([]);

  const [zoomOn, setZoomOn] = useState(false);

  const viewport = useGetWindowSize();

  const tabletScreen = viewport.width < viewport_sizes.l;
  const smallLaptopScreen = viewport.width < viewport_sizes.xl;

  useEffect(() => {
    if (viewerImages.length !== 0) {
      formateImageHandler(viewerImages);
    }
  }, [viewerImages]);

  const zoomHandler = () => setZoomOn((state) => !state);

  const formateImageHandler = (images) => {
    // clear before items
    setLocalImages([]);

    images.forEach((file, index) => {
      setLocalImages((state) => [
        ...state,
        {
          id: file.id ?? index++,
          src: file.url,
        },
      ]);
    });
  };

  console.log('localImages', localImages);
  

  const viewerMode = zoomOn ? (
    <ZoomBox />
  ) : (
    <ProductViewer
      images={localImages}
      previewMode={previewMode}
      zoomHandler={zoomHandler}
    />
  );

  return (
    <DemonstrationWrapper>
      <DemonstrationContainer>
        {smallLaptopScreen && (
          <ProductHeader
            name={generalData?.subGeneral?.name}
            price={generalData?.subGeneral?.price}
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
