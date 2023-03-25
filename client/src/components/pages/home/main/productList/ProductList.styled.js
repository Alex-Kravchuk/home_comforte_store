import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

const { xl, l, m } = viewport_sizes;

export const ProductListWrapper = styled.div`
  margin: 35px 0;

  @media (max-width: ${l}px) {
    margin: 25px 0;
    padding: 0 0 25px 0;
  }

  @media (max-width: ${m}px) {
    margin: 15px 0;
    padding: 0 0 15px 0;
  }
`;
export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: ${xl}px) {
    flex-direction: column;
  }
`;
export const ProductListItemContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin: 5px 0;

  // 7.5px it is a middle of 15px for both side block
  width: calc(50% - 7.5px);
  height: 40vh;

  font-size: ${getResponsiveFontSize(22, 16)};
  transition: all 0.2s ease;
  overflow: hidden;

  &:nth-child(even) {
    margin: 5px 0 5px 15px;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    h2::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: #fff;
    }
  }

  @media (max-width: ${xl}px) {
    width: 100%;

    &:nth-child(even) {
      margin: 5px 0 5px 0;
    }
  }

  @media (max-width: ${m}px) {
    width: 100%;
    height: 25vh;
  }
`;

export const ProductListOpacityItemContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);

  transition: all 0.1s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
export const ProductListItemTitle = styled.h2`
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 3;

  color: #fff;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0px;
    height: 2px;
    background: #fff;
    transition: all 0.2s ease;
  }
`;
export const ProductListItemImageContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const ProductListItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  transition: all 0.2s ease;
`;
