import React from "react";

import { Spin } from "antd";

import { PageLoaderContainer, PageLoaderWrapper } from "./PageLoader.styled";

const PageLoader = () => {
  return (
    <PageLoaderWrapper>
      <PageLoaderContainer>
        <Spin size="large" />
      </PageLoaderContainer>
    </PageLoaderWrapper>
  );
};

export default PageLoader;
