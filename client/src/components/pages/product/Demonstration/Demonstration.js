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

import {
  ViewerContainer,
  DemonstrationWrapper,
  DemonstrationContainer,
} from "./Demonstration.styled";
import ProductDetails from "./ProductDetails/ProductDetails";
import SimilarProducts from "./SimilarProducts/SimilarProducts";
import { getBase64 } from "../../../../helpers/getBase64";

const Demonstration = ({
  generalData,
  previewImages = [],
  previewMode = false,
  selectedCustomOption,
}) => {
  const [viewerImages, setViewerImages] = useState([]);

  const [zoomOn, setZoomOn] = useState(false);
  const zoomHandler = () => setZoomOn((state) => !state);

  const viewport = useGetWindowSize();

  const tabletScreen = viewport.width < viewport_sizes.l;
  const smallLaptopScreen = viewport.width < viewport_sizes.xl;

  useEffect(() => {
    if (selectedCustomOption?.viewerImages) {
      formateImageHandler(selectedCustomOption.viewerImages);
    }
  }, [selectedCustomOption]);

  const formateImageHandler = (images) => {
    // clear before items
    setViewerImages([]);

    images.forEach((file, index) => {
      setViewerImages((state) => [
        ...state,
        {
          id: file.id ?? index++,
          src: file.url,
        },
      ]);
    });
  };

  console.log("viewer images", viewerImages);

  const viewerMode = zoomOn ? (
    <ZoomBox />
  ) : (
    <ProductViewer
      images={viewerImages}
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
