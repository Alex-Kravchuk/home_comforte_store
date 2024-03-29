import styled from "styled-components";

import { getResponsiveFontSize } from "../../../helpers/getResponsiveFontSize";

export const UserWrapper = styled.div`
  .ant-menu-horizontal,
  .ant-menu-item,
  .ant-menu-submenu,
  .ant-menu-horizontal {
    padding-inline: 0 16px;
    font-size: ${getResponsiveFontSize(20, 18)};
  }

  .ant-menu-horizontal .ant-menu-item-icon {
    font-size: ${getResponsiveFontSize(20, 18)};
  }
`;
export const UserContainer = styled.div`
  position: relative;
`;


