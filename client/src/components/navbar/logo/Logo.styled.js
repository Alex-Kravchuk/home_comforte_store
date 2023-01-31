import styled from "styled-components";

import { sizes } from "../../../utils/css_size_consts";

const { global, m, xs, s, xl } = sizes;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: ${xl.width}px) {
    flex: 1 1 60%;
  }
`;

export const LogoTitle = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  font-size: ${global.logoFontSize}px;

  @media (max-width: ${m.width}px) {
    font-size: ${m.logoFontSize}px;
  }

  @media (max-width: ${s.width}px) {
    font-size: ${s.logoFontSize}px;
  }

  @media (max-width: ${xs.width}px) {
    font-size: ${xs.logoFontSize}px;
  }
`;

export const LogoTitlePart = styled.div``;

export const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
