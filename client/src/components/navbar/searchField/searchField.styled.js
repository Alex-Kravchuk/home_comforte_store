import styled, { css } from "styled-components";
import { sizes } from "../../../utils/css_size_consts";

const { global, l, xl, xxl } = sizes;

export const SearchFieldWrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
  background: #fff;
  box-shadow: 3px 3px 8px 0 #cccdcf;
  transition: all 0.3s ease;
  height: ${global.searchFieldHeight}px;

  ${({ open }) =>
    open
      ? css`
          bottom: -${global.searchFieldHeight + 1}px;
        `
      : css`
          bottom: 40px;
          opacity: 0;
        `}
`;
export const SearchFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 75%;
  height: 100%;

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
export const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  svg {
    height: 25px;
    width: 25px;
    color: #636466;
  }

  svg:hover {
    color: #000;
  }
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  height: 50%;

  &:focus {
    outline: none;
  }
`;
