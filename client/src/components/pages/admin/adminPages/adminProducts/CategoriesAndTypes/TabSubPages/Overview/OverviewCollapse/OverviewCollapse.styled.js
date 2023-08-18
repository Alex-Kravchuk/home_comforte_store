import styled from "styled-components";
import { SubTypeName } from "../../../../../../../../navbar/menu/dropdown/DropDownMenu.styled";
import { getResponsiveFontSize } from "../../../../../../../../../helpers/getResponsiveFontSize";

export const OverviewCollapseWrapper = styled.div`
  .ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-expand-icon {
    height: 34px;
  }
`;

export const OverviewCollapseContainer = styled.div`
  display: ${({ loading }) => (loading === true ? "flex" : "block")};
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
`;

export const SubTypePanelName = styled(SubTypeName)`
  margin: 10px 25px;
  display: block;
  width: fit-content;
  font-size: ${getResponsiveFontSize(14, 14, 1024)};
`;
