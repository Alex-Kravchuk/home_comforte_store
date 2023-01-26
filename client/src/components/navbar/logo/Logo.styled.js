import styled from "styled-components";

import { getResponsiveSize } from "../../../helpers/getResponsiveSize";
import { logoSizeIndex, fontSizeIndex } from "../../../utils/css_size_consts";

export const LogoWrapper = styled.div`
  margin: 0 15px;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const LogoTitle = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  font-size: ${getResponsiveSize(fontSizeIndex)};
`;

export const LogoTitlePart = styled.div``;
export const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const ImgContainer = styled.img`
  width: ${getResponsiveSize(logoSizeIndex)};
  height: ${getResponsiveSize(logoSizeIndex)};
`;
