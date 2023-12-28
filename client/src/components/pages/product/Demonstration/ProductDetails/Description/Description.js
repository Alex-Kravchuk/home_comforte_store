import React from "react";

import { Empty } from "antd";

import {
  DescriptionWrapper,
  DescriptionContainer,
  DescriptionParagraph,
} from "./Description.styled";

const Description = ({ text }) => {
  const paragraphsText = text?.split("\n");

  return (
    <DescriptionWrapper>
      <DescriptionContainer>
        {paragraphsText ? (
          paragraphsText.map((paragraph, index) => (
            <DescriptionParagraph key={index}>{paragraph}</DescriptionParagraph>
          ))
        ) : (
          <Empty description="No description" />
        )}
      </DescriptionContainer>
    </DescriptionWrapper>
  );
};

export default Description;
