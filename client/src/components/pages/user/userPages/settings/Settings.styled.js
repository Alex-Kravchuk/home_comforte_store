import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

const { l } = viewport_sizes;

export const SettingsWrapper = styled.div`
  margin-top: 20px;
  .ant-menu-horizontal .ant-menu-item {
    margin-top: 10px;
    padding-inline: 0 14px;
    font-size: ${getResponsiveFontSize(18, 16)};
  }

  .ant-menu-horizontal .ant-menu-item-icon {
    font-size: ${getResponsiveFontSize(18, 16)};
  }

  .ant-menu-inline .ant-menu-item {
    font-size: ${getResponsiveFontSize(18, 16)};
  }

  .ant-menu-inline .ant-menu-item-icon {
    font-size: ${getResponsiveFontSize(18, 16)};
  }

  @media (max-width: ${l}px) {
    // margin-top: 0;
  }
`;
export const SettingsContainer = styled.div``;
