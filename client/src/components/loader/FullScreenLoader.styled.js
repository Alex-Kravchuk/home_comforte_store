import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 17;

  display: flex;
  align-items: center;
  justify-content: center;

  .ant-spin-dot-item {
    background-color: green;
  }

  .ant-spin-text {
    color: green;
    font-size: 18px;
  }
`;
