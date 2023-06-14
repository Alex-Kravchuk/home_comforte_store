import styled from "styled-components";

export const PageLoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-hight: 400px;
  background-color: #fff;
  opacity: 0.5;
  z-index: 2;
  display: flex;
  justify-content: center;
`;

export const PageLoaderContainer = styled.div`
  width: auto;
  height: fit-content;
  position: relative;
  top: 15%;
`;
