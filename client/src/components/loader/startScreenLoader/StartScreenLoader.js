import React from "react";
import { FullScreenLoaderWrapper } from "./StartScreenLoader.styled";
import { Space, Spin } from "antd";

const StartScreenLoader = ({ loading }) => {
  return (
    <>
      {loading && (
        <FullScreenLoaderWrapper>
          <Space>
            <Spin size="large" />
          </Space>
        </FullScreenLoaderWrapper>
      )}
    </>
  );
};

export default StartScreenLoader;
