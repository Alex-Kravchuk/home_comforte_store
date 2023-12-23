import styled from "styled-components";

export const ModifierUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 18px;
  }

  .ant-upload-wrapper.ant-upload-picture-card-wrapper
    .ant-upload.ant-upload-select {
    width: 30px;
    height: 30px;
  }

  .ant-upload-wrapper.ant-upload-picture-card-wrapper {
    width: 30px;
  }
`;

export const ModifierUploadButtonWrapper = styled.div`
  color: rgba(0, 0, 0, 0.5);
  line-height: 1;

  svg {
    transition: all 0.2s ease;
  }

  &:hover {
    svg {
      color: rgba(0, 0, 0, 1);
    }
  }
`;
