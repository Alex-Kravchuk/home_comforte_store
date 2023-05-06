import React, { useEffect } from "react";
import { LoaderWrapper } from "./FullScreenLoader.styled";
import { Spin } from "antd";

const Loader = ({ loading }) => {
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
        <LoaderWrapper>
          <Spin size="large" tip="Just one second..." />
        </LoaderWrapper>
      )}
    </>
  );
};

export default Loader;
