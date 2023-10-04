import styled from "styled-components";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

// RH = ReviewsHeader

const { l, m } = viewport_sizes;

export const RHWrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  padding: 50px 0;

  @media (max-width: ${m}px) {
    padding: 30px 0;
  }
`;
export const RHContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${l}px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
`;

export const RHTitle = styled.div`
  font-size: 18px;
  font-weight: 600;

  @media (max-width: ${l}px) {
    margin-bottom: 8px;
  }
`;

export const RHRateContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const RHRateValueInNumber = styled.div`
  font-size: 38px;

  @media (max-width: ${m}px) {
    font-size: 28px;
  }
`;
export const RHRateValue = styled.div`
  margin: 0 15px;

  @media (max-width: ${m}px) {
    margin: 0 10px;
  }
`;

