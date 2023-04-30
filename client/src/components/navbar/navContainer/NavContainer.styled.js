import styled from "styled-components";
import { sizes } from "../../../utils/css_size_consts";

const { l, xxl, xl } = sizes;

export const NavContainerWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;

  @media (max-width: ${xxl}px) {
    width: ${xxl.contentContainerWidth}%;
  }

  @media (max-width: ${xl}px) {
    width: ${xl.contentContainerWidth}%;
  }

  @media (max-width: ${l}px) {
    width: ${l.contentContainerWidth}%;
  }
`;

export const LogoMenuContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  z-index: 9;
  background: #fff;
`;
