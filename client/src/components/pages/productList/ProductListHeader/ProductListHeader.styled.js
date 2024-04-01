import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../helpers/getResponsiveFontSize";
import { textColors } from "../../../../styles/globalStyles";

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
  margin-left: 30px;

  .ant-select-single.ant-select-lg {
    height: 50px;
  }

  .ant-btn.ant-btn-lg {
    padding: 10px;
  }
  .ant-btn-lg:hover {
    background-color: unset;
  }

  @media (max-width: 1024px) {
    margin: 20px 0 0 0;
    justify-content: left;
  }
`;
export const PLHeaderItemNumbers = styled.div`
  min-width: 70px;
  margin-left: 15px;

  @media (max-width: 1024px) {
    color: ${textColors.plain};
  }
`;

export const SelectLabel = styled.div`
  margin: 0 15px;
  min-width: 75px;
`;

export const FilterBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: rgba(0, 0, 0, 0.6);
    padding: 0 15px 0 0;
  }
`;
