import styled from "styled-components";
import { getResponsiveSize } from "../../../helpers/getResponsiveSize";
import { sizes } from "../../../utils/css_size_consts";

export const MenuWrapper = styled.div`
  height: 100%;
  font-size: ${getResponsiveSize(sizes.xxxl.navLinkFontSize)};

  a {
    text-decoration: none;
    color: #636466;
  }

  a:hover {
    color: #000;
  }

  @media (max-width: 1024px) {
    font-size: ${getResponsiveSize(sizes.xxl.navLinkFontSize)};
  }

  @media (max-width: 768px) {
    font-size: ${getResponsiveSize(sizes.xl.navLinkFontSize)};
  }
`;
export const MenuContainer = styled.div`
  height: 100%;
  display: flex;
`;

export const MenuItem = styled.div`
  margin: 0 10px;
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: ${({ activeMenuItem }) =>
    activeMenuItem ? "2px solid black" : "none"};

  &:hover {
    border-bottom: 2px solid black;
  }

  @media (max-width: 1200px) {
    margin: 0 5px;
  }
`;
