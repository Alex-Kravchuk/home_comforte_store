import styled from "styled-components";

import { sizes } from "../../../utils/css_size_consts";
import { viewport_sizes } from "../../../utils/viewport_size_consts";
import { css } from "@emotion/react";

const { xxl, xl, l } = viewport_sizes;

export const ProductWrapper = styled.div`
  // these styles are the same as Container styles from globalStyles.js
  // this is needed for one thing: when the user clicks the zoom button in the product viewer,
  // I want to show it a zoomed image without a bounding box, so I use custom bounding box
  // in each appropriate place

  width: ${({ previewMode }) =>
    previewMode ? "100" : sizes.global.contentContainerWidth}%;
  margin: 0 auto;

  @media (max-width: ${xxl}px) {
    width: ${({ previewMode }) =>
      previewMode ? "100" : sizes.xxl.contentContainerWidth}%;
  }

  @media (max-width: ${xl}px) {
    width: 100%;
  }
`;
export const ProductContainer = styled.div``;
export const ProudctInfoSection = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: ${xl}px) {
    flex-direction: column;
    align-items: stretch;
    height: auto;
  }
`;
