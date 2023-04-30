import styled from "styled-components";

import { getResponsiveFontSize } from "../../../helpers/getResponsiveFontSize";

import { sizes } from "../../../utils/css_size_consts";

const { headerHeightWhenScrollDown, headerHeightWhenOnTopPage } = sizes.global;

export const MenuWrapper = styled.div`
  height: 100%;

  font-size: ${getResponsiveFontSize(16, 14, 1024)};

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  a:hover {
    color: #000;
  }
`;
export const MenuContainer = styled.div`
  height: 100%;
  display: flex;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  margin: 0 20px;
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ activeMenuItem }) => (activeMenuItem ? "#000" : "")};

  @media (max-width: 1200px) {
    margin: 0 10px;
  }
`;

export const DropdownDarkBackgroundWrapper = styled.div`
  position: absolute;
  z-index: 1;

  top: ${({ scrollDown }) =>
    scrollDown
      ? headerHeightWhenScrollDown + "px"
      : headerHeightWhenOnTopPage + "px"};

  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;
