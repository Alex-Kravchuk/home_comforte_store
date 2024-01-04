import React from "react";
import { ErrorHint, HintContaiter, HintWrapper, InfoHint } from "./Hint.styled";

const Hint = ({ length }) => {
  const condition = length > 1 && length < 17;
  return (
    <HintWrapper>
      <HintContaiter>
        <ErrorHint condition={condition}>
          You must choose between 17 and 34 images
        </ErrorHint>
        <InfoHint>Number of images: {length}</InfoHint>
      </HintContaiter>
    </HintWrapper>
  );
};

export default Hint;
