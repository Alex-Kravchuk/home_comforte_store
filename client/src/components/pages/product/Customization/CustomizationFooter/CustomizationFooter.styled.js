import styled from "styled-components";
import { textColors } from "../../../../../styles/globalStyles";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

const { xxl, xl } = viewport_sizes;

export const CustomizationFooterWrapper = styled.div`
  a {
    text-decoration: none;
  }
`;
export const CustomizationFooterContainer = styled.div`
  a:nth-child(2) > div {
    border-top: none;
    border-bottom: none;
  }
`;

export const FooterLinkWrap = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
  padding: 20px;
  transition: all 0.2s ease;

  svg {
    transition: all 0.2s ease;
    position: relative;
    left: 0;
    color: ${textColors.svgColor};
  }

  &:nth-child(even) {
    border-left: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
    border-top: none;
    border-bottom: none;
  }

  &:hover {
    box-shadow: 0 0 3px 0.5px rgba(21, 21, 21, 0.1),
      0 1px 10px 0 rgba(21, 21, 21, 0.1);

    svg:nth-child(2) {
      left: 5px;
    }

    svg {
      color: ${textColors.svgHoverColor};
    }
  }

  @media (max-width: ${xl}px) {
    padding: 15px;
    margin: 0 20px;
    border-radius: 4px;
  }
`;

export const FooterLinkSubWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterLinkInfoContainer = styled.div`
  margin-left: 40px;

  @media (max-width: ${xxl}px) {
    margin-left: 25px;
  }

`;
export const FooterLinkName = styled.div`
  text-align: left;
  margin-bottom: 5px;
  color: ${textColors.title};
`;
export const FooterLinkAddInfo = styled.div`
  text-align: left;
  color: ${textColors.plain};
`;
