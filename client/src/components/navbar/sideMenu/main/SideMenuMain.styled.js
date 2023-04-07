import { Collapse } from "antd";
import styled from "styled-components";

import { getResponsiveFontSize } from "../../../../helpers/getResponsiveFontSize";
import { textColors } from "../../../../styles/globalStyles";

const { Panel } = Collapse;

export const SideMenuContainer = styled.div`
  border-bottom: 1px solid lightgray;

  & .css-dev-only-do-not-override-ixblex,
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    align-items: center;
  }
`;

export const SideMenuItem = styled(Panel)`
  .ant-collapse-header-text {
    color: ${textColors.main};
  }

  font-size: ${getResponsiveFontSize(24, 22)};

  svg {
    font-size: ${getResponsiveFontSize(22, 20)};
  }
`;

export const SideMenuSubItem = styled.div`
  font-size: ${getResponsiveFontSize(22, 20)};
  margin-left: 25px;
  padding: 0 0 10px 0;
  color: ${textColors.plain};

  &:active {
    color: #000;
  }
`;
