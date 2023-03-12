import React from "react";

import {
  SubTitleItem,
  ConstructorSubTitle,
  ConstructorMainTitle,
  ConstructorTitleWrapper,
} from "./ConstructorTitle.styled";

const ConstructorTitle = () => {
  return (
    <ConstructorTitleWrapper>
      <ConstructorMainTitle>THE INDIVIDUALITY</ConstructorMainTitle>
      <ConstructorSubTitle>
        <SubTitleItem>The possibility</SubTitleItem>
        <SubTitleItem>of making to order</SubTitleItem>
      </ConstructorSubTitle>
    </ConstructorTitleWrapper>
  );
};

export default ConstructorTitle;
