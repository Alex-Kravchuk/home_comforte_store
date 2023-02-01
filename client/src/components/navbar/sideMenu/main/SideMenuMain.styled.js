import { Collapse } from "antd";
import styled from "styled-components";
import { sizes } from "../../../../utils/css_size_consts";

const { Panel } = Collapse;

export const SideMenuContainer = styled.div`
  border-bottom: 1px solid lightgray;
`;

export const SideMenuItem = styled(Panel)`
  svg {
    font-size: ${sizes.xs.svgIconSize}px;
  }

  @media (max-width: ${sizes.xl.width}px) {
    font-size: ${sizes.xl.sideMenuLinkFontSize}px;
  }

  @media (max-width: ${sizes.m.width}px) {
    font-size: ${sizes.m.sideMenuLinkFontSize}px;
  }
`;

export const SideMenuSubItem = styled.div`
  margin-left: 25px;
  padding: 0 0 10px 0;
  color: #5e5e5e;

  &:active {
    color: #000;
  }

  @media (max-width: ${sizes.xl.width}px) {
    font-size: ${sizes.xl.sideMenuSubLinkFontSize}px;
  }

  @media (max-width: ${sizes.m.width}px) {
    font-size: ${sizes.m.sideMenuSubLinkFontSize}px;
  }
`;
