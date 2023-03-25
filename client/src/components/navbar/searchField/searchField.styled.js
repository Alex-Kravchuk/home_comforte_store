import styled, { css } from "styled-components";
import { sizes } from "../../../utils/css_size_consts";
import { viewport_sizes } from "../../../utils/viewport_size_consts";

const { global } = sizes;
const { l, xl, xxl } = viewport_sizes;

export const SearchFieldWrapper = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  z-index: 1;
  background: #fff;
  box-shadow: 3px 3px 8px 0 #cccdcf;
  transition: all 0.3s ease;
  height: ${global.searchFieldHeight}px;

  ${({ opened }) =>
    opened
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
  width: 75%; = vie
  height: 100%;

  form {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${xxl}px) {
    width: 85%;
  }

  @media (max-width: ${xl}px) {
    width: 90%;
  }

  @media (max-width: ${l}px) {
    width: 95%;
  }
`;
export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  border: none;
  background: none;

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
  background: none;
  border: none;
  width: 100%;
  height: 50%;
  font-size: 15px;

  &:focus {
    outline: none;
  }

  &[type="search"]::-webkit-search-decoration,
  &[type="search"]::-webkit-search-cancel-button,
  &[type="search"]::-webkit-search-results-button,
  &[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
`;
