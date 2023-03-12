import styled, { css } from "styled-components";
import { getResponsiveFontSize } from "../../../../../../helpers/getResponsiveFontSize";
import { sizes } from "../../../../../../utils/css_size_consts";

// CP = ConstructorPresentation

const { thumbSize } = sizes.global;

const rangeThumbStyle = `
-webkit-appearance: none;
box-shadow: none;
outline: none;
border: 0;
height: 100%;
width: ${thumbSize}px;
background: linear-gradient(90deg, transparent calc(${thumbSize}px / 2 - 1px), #fff calc(${thumbSize}px / 2 - 1px), #fff calc(${thumbSize}px / 2 + 1px), transparent calc(${thumbSize}px / 2 + 1px));
`;

const rangeTrackStyle = `
border: 0;
width: 100%;
height: 100%;
background: transparent;
`;

// styled components-------------------------------------------------------

export const CPWrapper = styled.div`
  position: relative;
  flex: 0 0 67.3%;
  width: 67.7%;
  height: 100%;

  @media (max-width: 1024px) {
    order: 1;
    width: 100%;
  }
`;

export const CPContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const CPThumbWrapper = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ThumbInput = styled.input`
  position: relative;
  z-index: 10;
  -webkit-appearance: none;
  width: calc(100% + 60px);
  height: 100%;
  cursor: col-resize;
  background: transparent;
  margin-left: -30px;

  &::-webkit-slider-thumb {
    ${rangeThumbStyle}
  }

  &::-moz-range-thumb {
    ${rangeThumbStyle}
  }

  &::-moz-focus-outer {
    ${rangeThumbStyle}
  }

  &::-ms-track {
    ${rangeTrackStyle}
  }

  &::-webkit-slider-runnable-track {
    ${rangeTrackStyle}
  }

  &::-moz-range-track {
    ${rangeTrackStyle}
  }

  &:focus {
    outline: none;
  }

  &:focus::-webkit-slider-runnable-track {
    background: transparent;
    outline: none;
  }

  &::-ms-fill-lower {
    background: transparent;
  }

  &::-ms-fill-upper {
    background: transparent;
  }

  &:focus::-ms-fill-lower {
    background: transparent;
  }

  &:focus::-ms-fill-upper {
    background: transparent;
  }
`;

export const CPImgUpperContainer = styled.div`
  ${({ width }) =>
    `
position: absolute;
top: 0;
left: 0;
clip-path: polygon(0 0, ${width}% 0, ${width}% 100%, 0 100%);
width: 100%;
height: auto;

`}
`;
export const CPImgLowerContainer = styled.div`
  ${({ width }) => `
clip-path: polygon(0 0, ${width}% 0, ${width}% 100%, 0 100%);
width: 100%;
height: auto;
`}
`;

export const CPImg = styled.img`
  width: 100%;
  height: auto;
`;

export const CPArrow = styled.span`
  position: absolute;
  top: 50%;
  left: ${({ shift }) => shift}%;
  transform: translate(-50%, -50%);
  width: 50px;
  text-align: center;

  svg {
    color: #fff;
    font-size: 18px;
  }
`;

export const OptionDescrptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${getResponsiveFontSize(16, 14)};

  span:nth-child(even) {
    text-align: right;
  }
`;
export const OptionDescrptionItem = styled.span`
  text-align: left;
  color: #9b9c9e;
  width: 40%;
  line-height: 1.3rem;
  padding: 15px 0;
`;

export const PresentationItem = styled.div``;


