import styled from "styled-components";

import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";
import { getResponsiveFontSize } from "../../../../../../helpers/getResponsiveFontSize";

const { xl } = viewport_sizes;

export const ConstructorTitleWrapper = styled.div`
  @media (max-width: ${xl}px) {
    text-align: center;
  }
`;

export const ConstructorMainTitle = styled.div`
  font-weight: 600;
  font-size: ${getResponsiveFontSize(16, 14)};
  padding: 35px 0;
`;
export const ConstructorSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
`;

export const SubTitleItem = styled.h2`
  font-size: ${getResponsiveFontSize(32, 24)};

  &:nth-child(1) {
    margin-bottom: 5px;
  }
`;
