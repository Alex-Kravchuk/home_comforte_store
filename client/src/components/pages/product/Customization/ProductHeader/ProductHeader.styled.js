import styled from "styled-components";

import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";
import { sizes } from "../../../../../utils/css_size_consts";
const { xl, m } = viewport_sizes;

export const ProductHeaderWrapper = styled.div`
  margin: 0 auto;

  @media (max-width: ${xl}px) {
    width: ${sizes.xl.contentContainerWidth}%;
  }
`;
export const ProductHeaderContainer = styled.div`
  @media (max-width: ${xl}px) {
    margin-top: 50px;
    margin-bottom: 20px;
  }

  @media (max-width: ${m}px) {
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const ProductName = styled.div`
  font-size: ${getResponsiveFontSize(22, 20)};
  margin-bottom: 10px;
  color: #000;
  font-weight: 500;

  @media (max-width: 1024px) {
    margin-bottom: 5px;
  }
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 20px;
`;
export const ProductRatingValue = styled.div`
  @media (max-width: 428px) {
    svg {
      font-size: 18px;
    }

    .ant-rate .ant-rate-star:not(:last-child) {
      margin-inline-end: 4px;
    }
  }
`;
export const ProductRatingNumber = styled.div`
  margin-left: 15px;
  @media (max-width: 428px) {
    font-size: 14px;
  }
`;
export const ProductPrice = styled.div`
  font-size: ${getResponsiveFontSize(22, 20)};
  font-weight: 500;
`;
