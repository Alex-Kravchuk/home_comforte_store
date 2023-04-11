import styled from "styled-components";
import { sizes } from "../../../../../../../utils/css_size_consts";

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

// ---styled components------------------------------------------------------------------------------------

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