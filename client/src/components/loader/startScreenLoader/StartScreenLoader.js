import React, { useEffect } from "react";
import { FullScreenLoaderWrapper } from "./StartScreenLoader.styled";
import { Spin } from "antd";

const StartScreenLoader = ({ loading }) => {
  return (
    <>
      {loading && (
        <FullScreenLoaderWrapper>
          <Spin size="large" tip="Just one second..." />
        </FullScreenLoaderWrapper>
      )}
    </>
  );
};

export default StartScreenLoader;
