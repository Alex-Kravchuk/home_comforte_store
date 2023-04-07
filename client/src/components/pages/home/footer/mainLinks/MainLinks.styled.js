import styled from "styled-components";

import { Collapse } from "antd";

import { viewport_sizes } from "../../../../../utils/viewport_size_consts";
import { textColors } from "../../../../../styles/globalStyles";

const { xl, l } = viewport_sizes;

// ML = MainLinks + [block name]

export const MLWrapper = styled.div`
  margin: 50px 0;
  font-size: 14px;

  @media (max-width: ${l}px) {
    margin: 0;
  }
`;

export const MLContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: ${l}px) {
    flex-direction: column;
  }
`;
// ---links block------------------------------------------------------------------------------
export const MLItemsContainer = styled.div`
  width: 100%;
  display: grid;
  row-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(180px, auto));
  flex: 1 1 65%;

  @media (max-width: ${xl}px) {
    flex: 1 1 50%;
  }

  @media (max-width: ${l}px) {
    display: block;
  }
`;
export const MLColumn = styled.div``;
export const MLColumnTitle = styled.div`
  color: ${textColors.title};
  padding-bottom: 10px;
`;
export const MLItem = styled.div`
  color: ${textColors.plain};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  left: 0;
  margin-bottom: 10px;

  &:hover {
    left: 5px;
  }
`;

// ---FAQ block----------------------------------------------------------------------------------
export const MLFAQContainer = styled.div`
  width: auto;
  border-left: 1px solid #d9d9d9;
  flex: 1 1 35%;
  padding-left: 50px;

  @media (max-width: ${xl}px) {
    flex: 1 1 50%;
  }

  @media (max-width: ${l}px) {
    border-left: none;
    padding: 25px 0;
    width: 100%;
  }
`;
export const MLFAQTitle = styled.div`
  margin-bottom: 30px;
`;
export const MLFAQTitleMain = styled.div`
  margin-bottom: 10px;
  color: ${textColors.title};
`;
export const MLFAQTitleSub = styled.div`
  color: rgba(0, 0, 0, 0.45);
  color: ${textColors.plain};
`;
export const MLFAQItems = styled.div``;
export const MLFAQItemWrap = styled.div`
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
  }

  @media (max-width: ${l}px) {
    width: 100%;
  }
`;

export const MLFAQItemSubWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const MLFAQInfoContainer = styled.div`
  margin-left: 40px;
`;
export const MLFAQItemName = styled.div`
  text-align: left;
  margin-bottom: 5px;
  color: ${textColors.title};
`;
export const MLFAQItemAddInfo = styled.div`
  text-align: left;
  color: ${textColors.plain};
`;

// ---mobile screen panel styles-----------------------------------------------------------------
export const CustomCollapse = styled(Collapse)`
  background: #fff;
  border-left: none;
  border-right: none;
  border-top: none;
  border-radius: 0;

  .ant-collapse-item:last-child {
    border-radius: 0;
  }
`;
