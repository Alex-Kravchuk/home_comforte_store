import styled from "styled-components";

import { marginConsts } from "../../../../../styles/globalStyles";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";
import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";

const { m, l } = viewport_sizes;

export const OwnConstructionWrapper = styled.div`
  width: 100%;
  background: rgba(215, 215, 196, 0.8);
  padding-bottom: 50px;

  @media (max-width: ${m}px) {
    padding-bottom: 25px;
  }

  ${marginConsts}
`;
export const OwnConstructionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 970px) {
    flex-direction: column;
  }
`;

export const ConstructionTitle = styled.div`
  text-align: center;
  padding: 50px 0;
  font-size: ${getResponsiveFontSize(30, 28)};

  @media (max-width: ${l}px) {
    padding: 25px;
  }
`;
