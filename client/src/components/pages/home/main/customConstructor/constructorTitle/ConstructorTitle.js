import React from "react";
import {
  ConstructorSubTitle,
  ConstructorTitleWrapper,
  ConstructorMainTitle,
  SubTitleItem,
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
