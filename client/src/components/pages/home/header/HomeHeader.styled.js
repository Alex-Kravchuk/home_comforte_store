import styled, { css } from "styled-components";
import { sizes } from "../../../../utils/css_size_consts";

import { getResponsiveSize } from "../../../../helpers/getResponsiveSize";

const { global, m, xxxl, xl, l } = sizes;

export const HomeHeaderWrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: auto;
`;

export const HomeHeaderImgContainer = styled.div`
  position: relative;
`;

export const HomeHeaderInscriptionContainer = styled.div`
  text-align: ${({ textPosition }) => textPosition};
  font-family: "Anton", sans-serif;
  color: #fff;
  position: absolute;

  ${({ position }) => css`
    ${position}
  `}

  @media (max-width: ${m.width}px) {
    width: 80vw;
  }
`;

export const HomeHeaderInscriptionTitle = styled.div`
  font-weight: bold;
  font-size: ${getResponsiveSize(xxxl.fontSize)};

  @media (max-width: ${m.width}px) {
    font-size: ${getResponsiveSize(m.homeHeaderInscriptionTitleFontSize)};
  }
`;
export const HomeHeaderInscriptionDiscription = styled.div`
  font-size: ${getResponsiveSize(xxxl.fontSize - 0.6)};

  @media (max-width: ${m.width}px) {
    font-size: ${getResponsiveSize(m.homeHeaderInscriptionSubTitleFontSize)};
  }
`;

export const HomeHeaderImg = styled.img`
  width: 100%;
  height: calc(100vh - ${global.headerHeightWhenOnTopPage}px);

  @media (max-width: ${xl.width}px) {
    height: calc(85vh - ${global.headerHeightWhenOnTopPage}px);
  }

  @media (max-width: ${l.width}px) {
    height: auto;
  }

  @media (max-width: ${m.width}px) {
    height: calc(80vh - ${global.headerHeightWhenOnTopPage}px);
  }
`;
