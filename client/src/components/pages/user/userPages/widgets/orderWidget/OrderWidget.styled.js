import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../../helpers/getResponsiveFontSize";

// OW = OrderWidget

export const OWWrapper = styled.div`
  height: 100%;

  .ant-table-tbody > tr > td {
    font-size: ${getResponsiveFontSize(16, 14)};
  }

  @media (min-width: 768px) {
    .ant-tag {
      font-size: 14px;
    }
  }
`;
export const OWContainer = styled.div``;
