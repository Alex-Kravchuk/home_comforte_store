import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../../helpers/getResponsiveFontSize";

// AIW = AdditionalInfoWidget

export const AIWWrapper = styled.div`
  margin-top: 20px;

  .ant-tabs .ant-tabs-tab {
    font-size: ${getResponsiveFontSize(20, 16)};
    color: #000000;
  }
`;
export const AIWContainer = styled.div``;
