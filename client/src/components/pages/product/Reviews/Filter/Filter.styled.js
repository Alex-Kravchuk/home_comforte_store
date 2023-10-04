import styled from "styled-components";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

const { m } = viewport_sizes;

export const FilterWrapper = styled.div`
  padding: 15px 0;
`;
export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FilterReviewsNumber = styled.div``;

export const FilterSortContainer = styled.div``;
export const FilterSortLabel = styled.span`
  margin-right: 5px;

  @media (max-width: ${m}px) {
    font-size: 14px;
  }
`;
