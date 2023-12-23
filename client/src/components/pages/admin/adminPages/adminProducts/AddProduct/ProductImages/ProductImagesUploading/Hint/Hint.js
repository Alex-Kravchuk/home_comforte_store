import React from "react";
import { ErrorHint, HintContaiter, HintWrapper, InfoHint } from "./Hint.styled";

const Hint = ({ length }) => {
  const condition = length > 1 && length < 16;
  return (
    <HintWrapper>
      <HintContaiter>
        <ErrorHint condition={condition}>
          You must choose between 16 and 32 images
        </ErrorHint>
        <InfoHint>Number of images: {length}</InfoHint>
      </HintContaiter>
    </HintWrapper>
  );
};

export default Hint;
