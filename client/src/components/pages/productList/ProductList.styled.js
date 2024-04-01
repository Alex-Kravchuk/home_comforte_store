import styled from "styled-components";
import { getResponsiveFontSize } from "../../../helpers/getResponsiveFontSize";

// PL = ProductList

export const PLWrapper = styled.div`
  .ant-drawer .ant-drawer-body {
    padding: 24px 0;
  }
`;
export const PLContainer = styled.div``;
export const PLMainSection = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  margin-top: 30px;

  @media (max-width: 1024px) {
    margin-top: 20px;
  }
`;
