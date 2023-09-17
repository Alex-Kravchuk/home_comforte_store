import styled from "styled-components";

import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";

export const ProductHeaderWrapper = styled.div`
  @media (max-width: 760px) {
    width: 92%;
    margin: 0 auto;
  }
`;
export const ProductHeaderContainer = styled.div`
  @media (max-width: 1024px) {
    margin-top: 50px;
    margin-bottom: 20px;
  }

  @media (max-width: 430px) {
    margin-top: 40px;
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
