import styled from "styled-components";

import { sizes } from "../../utils/css_size_consts";

const { global, xs, s, l, xl, xxl } = sizes;

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
  z-index: 2;

  box-shadow: ${({ openSearchField }) =>
    !openSearchField ? "0 8px 8px 0 rgb(0 0 0 / 10%)" : "none"};

  height: ${({ scrollDown }) =>
    scrollDown
      ? global.headerHeightWhenScrollDown + "px"
      : global.headerHeightWhenOnTopPage + "px"};

  svg {
    cursor: pointer;
    color: #636466;
    font-size: ${global.svgIconSize}px;
  }

  svg:hover {
    color: #000;
  }

  @media (max-width: ${l.width}px) {
    height: ${l.headerHeight}px;
  }

  @media (max-width: ${s.width}px) {
    svg {
      font-size: ${s.svgIconSize}px;
    }
  }

  @media (max-width: ${xs.width}px) {
    svg {
      font-size: ${xs.svgIconSize}px;
    }
  }
`;

export const RelativeContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;

  height: ${({ scrollDown }) =>
    scrollDown
      ? global.headerHeightWhenScrollDown + "px"
      : global.headerHeightWhenOnTopPage + "px"};

  @media (max-width: ${l.width}px) {
    height: ${l.headerHeight}px;
  }
`;

export const NavContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 75%;

  @media (max-width: ${xxl.width}px) {
    width: 85%;
  }

  @media (max-width: ${xl.width}px) {
    width: 90%;
  }

  @media (max-width: ${l.width}px) {
    width: 95%;
  }
`;

export const LogoMenuContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  z-index: 3;
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
  z-index: 3;
`;
