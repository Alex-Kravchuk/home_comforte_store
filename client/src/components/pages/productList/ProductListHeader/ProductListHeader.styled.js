import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../helpers/getResponsiveFontSize";

// titles

export const PLHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const PLTitlesContainer = styled.div``;
export const PLHeaderTitle = styled.h2`
  font-size: ${getResponsiveFontSize(30, 24)};
  letter-spacing: 2px;
`;
export const PLHeaderSubTitle = styled.div`
  margin: 10px 0;
`;

// for sorting
export const PLHeaderSortingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 400px;
  margin-left: 30px;

  .ant-select-single.ant-select-lg {
    height: 50px;
  }

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;
export const PLHeaderItemNumbers = styled.div``;

export const SelectLabel = styled.div`
  margin: 0 15px;
`;
