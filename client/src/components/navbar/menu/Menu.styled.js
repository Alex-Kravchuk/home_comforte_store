import styled from "styled-components";
import { getResponsiveSize } from "../../../helpers/getResponsiveSize";
import { navLinkFontSizeIndex } from "../../../utils/css_size_consts";

export const MenuWrapper = styled.div`
  height: 100%;
  font-size: ${getResponsiveSize(navLinkFontSizeIndex)};

  a {
    text-decoration: none;
    color: #636466;
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
  margin: 0 5px;
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-bottom: 2px solid black;
  }
`;
