import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../../helpers/getResponsiveFontSize";

import { viewport_sizes } from "../../../../../../utils/vieport_size_consts";
const { xl } = viewport_sizes;

export const ConstructorTitleWrapper = styled.div`
  @media (max-width: ${xl}px) {
    text-align: center;
  }
`;

export const ConstructorMainTitle = styled.div`
  font-weight: 600;
  font-size: ${getResponsiveFontSize(16, 14)};
  color: #888888;
  padding: 35px 0;
`;
export const ConstructorSubTitle = styled.h2`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
`;

export const SubTitleItem = styled.h2`
  font-size: ${getResponsiveFontSize(32, 24)};
  color: #787878;

  &:nth-child(1) {
    margin-bottom: 5px;
  }
`;
