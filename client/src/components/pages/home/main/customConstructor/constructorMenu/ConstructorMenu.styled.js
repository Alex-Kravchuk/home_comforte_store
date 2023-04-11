import styled from "styled-components";

import { textColors } from "../../../../../../styles/globalStyles";
import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";
import { getResponsiveFontSize } from "../../../../../../helpers/getResponsiveFontSize";

const { xxl, xl, xs, m } = viewport_sizes;

export const ConstructorMenuWrapper = styled.div`
  flex: 1 0 33.3%;
  height: auto;

  @media (max-width: ${xl}px) {
    // this is necessary in order to display under the constructor 
    order: 2;
  }
`;

export const ConstructorMenuContainer = styled.div`
  width: auto;
  height: 100%;
`;

export const ConstructorMenuOptionsList = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${xl}px) {
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const ConstructorMenuOptionsItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 15px;
  width: 150px;
  margin: 10px 0;

  @media (max-width: ${xs}px) {
    width: auto;
  }

  &:hover {
    div:nth-child(2) {
      left: 5px;
    }
  }
`;
export const ConstructorMenuOptionsItemIconContainer = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  margin-right: 25px;
  background: ${({ selected }) => (selected ? "#c6ccc2" : "transparent")};

  @media (max-width: ${xl}px) {
    margin-right: 10px;
  }

  @media (max-width: ${xs}px) {
    margin-right: 25px;
  }
`;

export const ConstructorMenuOptionsItemIcon = styled.img`
  width: 48px;
  height: 48px;

  @media (max-width: 1800px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: ${xxl}px) {
    width: 32px;
    height: 32px;
  }
`;

export const ConstructorMenuOptionsItemTitle = styled.div`
  position: relative;
  left: 0;
  font-size: ${getResponsiveFontSize(20, 16)};
  white-space: nowrap;
  color: ${textColors.plain};
  transition: all 0.2s ease;

  @media (max-width: ${xl}px) {
    white-space: normal;
  }

  @media (max-width: ${m}px) {
    white-space: normal;
  }
`;
