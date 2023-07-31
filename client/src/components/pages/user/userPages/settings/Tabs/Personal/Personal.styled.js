import styled, { css } from "styled-components";
import { viewport_sizes } from "../../../../../../../utils/viewport_size_consts";

const { m } = viewport_sizes;

export const PersonalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px 0 35px 0;

  @media (max-width: ${m}px) {
    display: block;
    margin: 40px 0 35px 0;
  }

    .ant-upload-wrapper.ant-upload-picture-card-wrapper
      .ant-upload-list.ant-upload-list-picture-card
      .ant-upload-list-item-container {
      width: 150px;
      height: 150px;
    }
  }

  .ant-upload-wrapper.ant-upload-picture-card-wrapper
    .ant-upload-list.ant-upload-list-picture-card
    .ant-upload-list-item-container {
    width: 170px;
    height: 170px;
  }

  .ant-upload-wrapper.ant-upload-picture-card-wrapper
    .ant-upload.ant-upload-select {
    width: 102px;
    height: 102px;
    transition: all 0.2s ease;

    ${({ avatar }) =>
      avatar
        ? css`
            width: 50px;
            height: 50px;
          `
        : ""}
  }

  .ant-upload-list.ant-upload-list-picture-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .ant-upload-wrapper.ant-upload-picture-card-wrapper
    .ant-upload-list.ant-upload-list-picture-card
    .ant-upload-list-item-actions {
    a {
      margin-right: 20px;
    }
  }
`;
