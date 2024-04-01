import styled from "styled-components";
import { textColors } from "../../../../styles/globalStyles";

export const FiltersWrapper = styled.div`
  .ant-collapse-borderless {
    background-color: #fff;
  }

  .ant-collapse-borderless
    > .ant-collapse-item
    > .ant-collapse-content
    > .ant-collapse-content-box {
    padding: 0 16px 16px 0;
  }

  flex: 0 0 250px;
  border-top: 1px solid #d9d9d9;
`;
export const FiltersContainer = styled.div``;

export const CollapseLable = styled.div`
  font-size: 16px;
`;

export const FiltersList = styled.div`
  padding-left: 24px;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;

  padding: 5px 0;
`;
export const FilterName = styled.div`
  margin-left: 10px;
  color: ${textColors.plain};
`;

export const FilterDescr = styled.div`
  color: ${textColors.plain};
  text-align: justifyl;
`;

export const FiltersDrawerContainer = styled.div`
  .ant-select-single.ant-select-lg {
    margin: 10px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
`;
