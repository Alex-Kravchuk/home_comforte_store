import styled from "styled-components";

import { sizes } from "../../utils/css_size_consts";

import { getResponsiveFontSize } from "../../helpers/getResponsiveFontSize";

import { viewport_sizes } from "../../utils/viewport_size_consts";
import { textColors } from "../../styles/globalStyles";

const { global } = sizes;

const { l } = viewport_sizes;

export const NavWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: #fff;
  transition: height 0.2s ease;
  border-bottom: 1px solid lightgray;
  position: sticky;
  top: 0;
  z-index: 16;
  box-sizing: border-box;

  box-shadow: ${({ openSearchField }) =>
    !openSearchField ? "0 5px 5px 0 rgb(0 0 0 / 10%)" : "none"};

  height: ${({ scrollDown }) =>
    scrollDown
      ? global.headerHeightWhenScrollDown + "px"
      : global.headerHeightWhenOnTopPage + "px"};

  svg {
    cursor: pointer;
    color: ${textColors.svgColor};
    font-size: ${getResponsiveFontSize(27, 25)};

    &:hover {
      color: ${textColors.svgHoverColor};
    }
  }

  @media (max-width: ${l}px) {
    height: ${global.headerHeightOnSmallScreen}px;
  }
`;

export const RelativeContainer = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;

  height: ${({ scrollDown }) =>
    scrollDown
      ? global.headerHeightWhenScrollDown + "px"
      : global.headerHeightWhenOnTopPage + "px"};

  @media (max-width: ${l}px) {
    height: ${global.headerHeightOnSmallScreen}px;
  }
`;

// I use <EmptyContainer /> for correct view of search field by usin position and z-index
export const EmptyContainer = styled.div`
  position: absolute;
  background: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
`;
