import React, { useEffect, useState } from "react";

import example from "../../../../../../assets/img/viewer/dimension/dimension_example.webp";

import {
  DimensionsWrapper,
  DimensionsContainer,
  DimensionsImage,
  DimensionsDescr,
  DescrHeader,
  DescrContent,
} from "./Dimensions.styled";
import { Empty } from "antd";
import { getBase64 } from "../../../../../../helpers/getBase64";

const Dimensions = ({ img }) => {
  const [srcURL, setSrcURL] = useState(null);

  useEffect(() => {
    if (img) {
      getBase64(img, (url) => {
        setSrcURL(url);
      });
    }
  }, [img]);

  console.log('img', img);
  console.log('src', srcURL);


  return (
    <DimensionsWrapper>
      <DimensionsContainer>
        {srcURL ? (
          <DimensionsImage src={srcURL} alt="dimensions" />
        ) : (
          <Empty description="No image data" />
        )}

        <DimensionsDescr>
          <DescrHeader>How we measure</DescrHeader>
          <DescrContent>
            Our furniture measurements are calculated from each piece’s widest
            or tallest points. Cushion overhang beyond the frame, the crown
            (highest point) on a fully fluffed seat cushion, and outward curves
            and angles are all included in the overall dimensions.
          </DescrContent>
        </DimensionsDescr>
      </DimensionsContainer>
    </DimensionsWrapper>
  );
};

export default Dimensions;
