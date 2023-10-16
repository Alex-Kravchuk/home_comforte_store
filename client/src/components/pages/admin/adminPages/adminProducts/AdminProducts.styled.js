import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";

export const AdminProductsWrapper = styled.div`
  .ant-tabs,
  .ant-tabs-tab,
  .ant-tabs-tab-active,
  .ant-tabs-tab-btn {
    font-size: ${getResponsiveFontSize(18, 16)};
  }

  .ant-list-bordered.ant-list-lg .ant-list-item {
    @media (max-width: 760px) {
      padding: 12px 20px;
    }

    @media (max-width: 425px) {
      padding: 8px 16px;
    }
  }
`;
export const AdminProductsContainer = styled.div``;
export const AdminTitlesGroupe = styled.div``;
export const AdminTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 760px) {
    svg:last-child {
      visibility: hidden;
    }
  }
`;

export const TabLabel = styled.div`
  display: flex;
  align-items: center;
`;

export const TabLabelText = styled.div`
  margin-left: 5px;
`;

export const SubPageWrapper = styled.div`
  margin-bottom: 16px;
`;
export const SubPageContainer = styled.div`
  .ant-select-single.ant-select-lg {
    height: 100%;
  }
`;
