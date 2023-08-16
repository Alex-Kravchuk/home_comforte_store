import styled from "styled-components";
import { SubTypeName } from "../../../../../../../../navbar/menu/dropdown/DropDownMenu.styled";
import { getResponsiveFontSize } from "../../../../../../../../../helpers/getResponsiveFontSize";

export const OverviewCollapseWrapper = styled.div``;

export const OverviewCollapseContainer = styled.div`
  display: ${({ loading }) => (loading ? "flex" : "block")};
  align-items: center;
  justify-content: center;
`;

export const SubTypePanelName = styled(SubTypeName)`
  margin-left: 25px;
  display: block;
  width: fit-content;
  font-size: ${getResponsiveFontSize(14, 14, 1024)};
`;
