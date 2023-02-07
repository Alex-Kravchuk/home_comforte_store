import { Collapse } from "antd";
import styled from "styled-components";
import { sizes } from "../../../../utils/css_size_consts";

import { getResponsiveFontSize } from "../../../../helpers/getResponsiveFontSize";

const { Panel } = Collapse;

export const SideMenuContainer = styled.div`
  border-bottom: 1px solid lightgray;

  & .css-dev-only-do-not-override-ixblex,
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    align-items: center;
  }
`;

export const SideMenuItem = styled(Panel)`
  font-size: ${getResponsiveFontSize(24, 22)};

  svg {
    font-size: ${getResponsiveFontSize(22, 20)};
  }
`;

export const SideMenuSubItem = styled.div`
  font-size: ${getResponsiveFontSize(22, 20)};
  margin-left: 25px;
  padding: 0 0 10px 0;
  color: #5e5e5e;

  &:active {
    color: #000;
  }
`;
