import styled from "styled-components";

import { viewport_sizes } from "../../../../../../utils/vieport_size_consts";
import { getResponsiveFontSize } from "../../../../../../helpers/getResponsiveFontSize";

const { xxl, xl, xs, m } = viewport_sizes;

export const ConstructorMenuWrapper = styled.div`
  flex: 1 0 33.3%;
  height: auto;

  @media (max-width: ${xl}px) {
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
  width: 52px;
  height: 52px;

  @media (max-width: 1800px) {
    width: 46px;
    height: 46px;
  }

  @media (max-width: ${xxl}px) {
    width: 32px;
    height: 32px;
  }
`;

export const ConstructorMenuOptionsItemTitle = styled.div`
  font-size: ${getResponsiveFontSize(20, 16)};
  white-space: nowrap;
  color: #808080;

  @media (max-width: ${xl}px) {
    white-space: normal;
  }

  @media (max-width: ${m}px) {
    white-space: normal;
  }
`;
