import styled from "styled-components";

import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";

import { marginConsts } from "../../../../../styles/globalStyles";

export const MainVideoWrapper = styled.div`
  ${marginConsts}

  position: relative;
  cursor: pointer;
`;
export const MainVideoContent = styled.video`
  width: 100%;
  hight: auto;
`;
