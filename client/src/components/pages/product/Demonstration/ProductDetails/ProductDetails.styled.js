import styled from "styled-components";
import { sizes } from "../../../../../utils/css_size_consts";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

const { xl } = viewport_sizes;

export const ProductDetailsWrapper = styled.div`
  .ant-collapse.ant-collapse-icon-position-end
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-expand-icon {
    margin-right: 10px;
  }

  .ant-collapse {
    background: inherit;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }

  .ant-collapse > .ant-collapse-item {
    border-radius: 0px;
  }

  .ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-header-text {
    font-size: 16px;
  }

  .ant-collapse .ant-collapse-content > .ant-collapse-content-box {
    font-size: 16px;
  }

  .ant-collapse .ant-collapse-content > .ant-collapse-content-box {
    padding: 10px 0;
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    padding: 20px 0;
  }

  .ant-collapse .ant-collapse-content {
    border-top: none;
  }

  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 100%;

  @media (max-width: ${xl}px) {
    width: ${sizes.xl.contentContainerWidth}%;

    .ant-collapse .ant-collapse-content > .ant-collapse-content-box {
      font-size: 14px;
    }
  }
`;
export const ProductDetailsContainer = styled.div`
  max-width: 683px;
  width: 100%;
`;
