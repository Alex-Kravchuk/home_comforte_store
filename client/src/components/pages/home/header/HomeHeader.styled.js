import styled, { css } from "styled-components";
import { sizes } from "../../../../utils/css_size_consts";

import { getResponsiveFontSize } from "../../../../helpers/getResponsiveFontSize";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";

const { global } = sizes;
const { m, l } = viewport_sizes;

export const HomeHeaderWrapper = styled.div`
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  width: 100vw;
  max-width: 100%;
  height: auto;
`;

export const HomeHeaderImgContainer = styled.div`
  position: relative;
`;

export const HomeHeaderInscriptionContainer = styled.div`
  text-align: ${({ textPosition }) => textPosition};
  color: #fff;
  position: absolute;

  ${({ position }) => css`
    ${position}
  `}

  @media (max-width: ${m}px) {
    width: 80vw;
  }
`;

export const HomeHeaderInscriptionTitle = styled.div`
  font-weight: bold;
  font-size: ${getResponsiveFontSize(28, 20)};
`;
export const HomeHeaderInscriptionDiscription = styled.div`
  font-size: ${getResponsiveFontSize(20, 16)};
`;

export const HomeHeaderImg = styled.img`
  width: 100%;
  ${({ verticalOrientation }) =>
    verticalOrientation
      ? css`
          height: calc(85vh - ${global.headerHeightWhenOnTopPage}px);
        `
      : css`
          height: calc(100vh - ${global.headerHeightWhenOnTopPage}px);
        `}

  @media (max-width: ${l}px) {
    height: calc(85vh - ${global.headerHeightWhenOnTopPage}px);
  }

  @media (max-width: ${m}px) {
    height: calc(80vh - ${global.headerHeightWhenOnTopPage}px);
  }
`;
