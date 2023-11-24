import styled from "@emotion/styled";

// PVI = ProductViewerImages

export const PVIWrapper = styled.div``;

export const PVIContainer = styled.div``;
export const PVIHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;
export const PVIClearFileListContainer = styled.div`
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
  }

  svg:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;
