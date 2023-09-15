import React, { useState } from "react";

import ZoomInIcon from "@mui/icons-material/ZoomIn";

import ZoomBox from "./ZoomBox/ZoomBox";
import ProductViewer from "./ProductViewer/ProductViewer";

import { images } from "./ProductViewer/imagesForTest";

import { viewport_sizes } from "../../../../utils/viewport_size_consts";

import { useGetWindowSize } from "../../../../hooks/useGetWindowSize";

import {
  ViewerModeIcon,
  DemonstrationWrapper,
  DemonstrationContainer,
  ViewerModeButtonContainer,
} from "./Demonstration.styled";

const Demonstration = () => {
  const [zoomOn, setZoomOn] = useState(false);
  const zoomHandler = () => setZoomOn((state) => !state);

  const viewport = useGetWindowSize();

  const smallScreen = viewport.width < viewport_sizes.l;

  return (
    <DemonstrationWrapper>
      <DemonstrationContainer>
        {zoomOn ? (
          <ZoomBox />
        ) : (
          <ProductViewer images={images} zoomHandler={zoomHandler} />
        )}
      </DemonstrationContainer>
      {smallScreen && (
        <ViewerModeButtonContainer onClick={zoomHandler} zoomOn={zoomOn}>
          <ViewerModeIcon>
            {zoomOn ? <span>360&deg;</span> : <ZoomInIcon />}
          </ViewerModeIcon>
        </ViewerModeButtonContainer>
      )}
    </DemonstrationWrapper>
  );
};

export default Demonstration;
