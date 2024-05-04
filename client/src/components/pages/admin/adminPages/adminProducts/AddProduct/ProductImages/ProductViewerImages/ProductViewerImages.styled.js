import styled from "@emotion/styled";

// PVI = ProductViewerImages

export const PVIWrapper = styled.div`
  .ant-upload-wrapper .ant-upload-list .ant-upload-list-item {
    cursor: pointer;
  }
`;

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
    margin-left: 40px;
  }

  svg {
    margin-left: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: ${({ saved }) => (saved ? "#60a360" : "rgba(0, 0, 0, 0.3))")};
  }

  svg:hover {
    color: ${({ saved }) => (saved ? "#84e684" : "rgba(0, 0, 0, 0.8)")};
  }

  & > svg:last-child {
    color: red;
  }

  svg:active {
    color: rgba(0, 0, 0, 1);
  }
`;

export const NoImagesErrorText = styled.div`
  font-size: 14px;
  color: red;
  margin: -12px 0 12px 0;
`;

export const SelectLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;

  span:nth-of-type(2) {
    color: red;
  }
`;

export const PVIConentGroup = styled.div`
  display: flex;
`;

export const PVIContentRow = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PVIContentColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NoDataContainer = styled.div`
  color: red;
`;

export const SelectContainer = styled.div`
  position: relative;
  padding-left: 30px;

  & > div > svg {
    margin-left: 0;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const InfoIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(0, -50%);
  display: flex;
  align-items: center;
  padding-left: 0 15px;
`;

export const UploadButtonWrapper = styled.div`
  width: 102px;
  height: 102px;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.02);
  border: 1px dashed #d9d9d9;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: #1677ff;
  }
}
`;
