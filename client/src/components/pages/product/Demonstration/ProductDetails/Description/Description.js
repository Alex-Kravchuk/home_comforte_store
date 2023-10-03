import React from "react";
import {
  DescriptionContainer,
  DescriptionParagraph,
  DescriptionWrapper,
} from "./Description.styled";

const Description = () => {
  return (
    <DescriptionWrapper>
      <DescriptionContainer>
        <DescriptionParagraph>
          Sloan strikes an ideal balance between sleek and soft. Take, for
          instance, the crisp lines of its track arm, which are offset by a
          subtle taper near the back. The Sloan custom sofa reflects a modern
          influence, yet is approachable and livable. It's no wonder it feels
          right in a variety of decors, whether modern or more traditional.
        </DescriptionParagraph>
        <DescriptionParagraph>
          Sloan's sit profile only adds to the universal appeal. With a medium
          height and depth, this custom sofa suits a range of body types. The
          layered cushion is soft, yet supportive, and can be upgraded for an
          extra-soft sit.
        </DescriptionParagraph>
      </DescriptionContainer>
    </DescriptionWrapper>
  );
};

export default Description;
