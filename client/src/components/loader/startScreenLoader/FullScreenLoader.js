import React, { useEffect } from "react";
import { FullScreenLoaderWrapper } from "./FullScreenLoader.styled";
import { Spin } from "antd";

const StartScreenLoader = ({ loading }) => {
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

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
