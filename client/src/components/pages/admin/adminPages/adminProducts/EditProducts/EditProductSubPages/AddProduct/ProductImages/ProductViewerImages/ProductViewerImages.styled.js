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

export const PVISelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  .ant-select-single {
    width: 250px;
  }

  .ant-select-single:nth-of-type(2n) {
    margin-left: 15px;
  }

  svg {
    margin-left: 50px;
    cursor: pointer;
    color: ${({ saved }) => (saved ? "#60a360" : "rgba(0, 0, 0, 0.3))")};
    transition: all 0.2s ease;
  }

  svg:hover {
    color: ${({ saved }) => (saved ? "#84e684" : "rgba(0, 0, 0, 0.8)")};
  }

  svg:active {
    color: rgba(0, 0, 0, 1);
  }
`;
