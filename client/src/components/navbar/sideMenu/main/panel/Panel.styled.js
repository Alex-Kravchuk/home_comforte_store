import styled from "styled-components";

import { Collapse } from "antd";

import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";

import { textColors } from "../../../../../styles/globalStyles";

const { Panel } = Collapse;

export const PanelHeaderWrapper = styled.div``;
export const PanelHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PanelHeaderText = styled.div``;
export const PanelHeaderImg = styled.img`
  width: 50px;
  height: auto;
`;

export const NestedPanelWrapper = styled(Panel)`
  .ant-collapse-header-text {
    color: ${textColors.main};
  }

  font-size: ${getResponsiveFontSize(20, 18)};

  svg {
    font-size: ${getResponsiveFontSize(20, 18)};
  }
`;
