import styled from "styled-components";

import { sizes } from "../../utils/css_size_consts";

import { getResponsiveFontSize } from "../../helpers/getResponsiveFontSize";

import { viewport_sizes } from "../../utils/vieport_size_consts";

const { global} = sizes;

const {l, xl, xxl} = viewport_sizes;

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
  z-index: 4;

  box-shadow: ${({ openSearchField }) =>
    !openSearchField ? "0 8px 8px 0 rgb(0 0 0 / 10%)" : "none"};

  height: ${({ scrollDown }) =>
    scrollDown
      ? global.headerHeightWhenScrollDown + "px"
      : global.headerHeightWhenOnTopPage + "px"};

  svg {
    cursor: pointer;
    color: #636466;
    font-size: ${getResponsiveFontSize(27, 25)};
  }

  svg:hover {
    color: #000;
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

export const NavContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;

  @media (max-width: ${xxl}px) {
    width: ${sizes.xxl.contentContainerWidth}%;
  }

  @media (max-width: ${xl}px) {
    width: ${sizes.xl.contentContainerWidth}%;
  }

  @media (max-width: ${l}px) {
    width: ${sizes.l.contentContainerWidth}%;
  }
`;

export const LogoMenuContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  z-index: 9;
  background: #fff;
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
