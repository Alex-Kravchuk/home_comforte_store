import styled from "styled-components";

export const TabLabel = styled.div`
  display: flex;
  align-items: center;
`;

export const TabLabelText = styled.div`
  margin-left: 5px;
`;

export const SubPageWrapper = styled.div`
  // these selectors must be written like this to work correctly
  .ant-select-single.ant-select-lg .ant-select-selector {
    height: 50px;
    line-height: 45px;
  }

  .ant-select-single.ant-select-lg .ant-select-selection-placeholder {
    line-height: 45px;
  }

  .ant-select-single.ant-select-lg.ant-select-show-arrow
    .ant-select-selection-item {
    line-height: 45px;
  }
`;
export const SubPageContainer = styled.div``;
