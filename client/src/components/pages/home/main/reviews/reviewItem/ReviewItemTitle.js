import React from "react";
import {
  ReviewItemTitelMain,
  ReviewItemTitelSub,
  ReviewItemTitelWrap,
} from "./ReviewItem.styled";

const ReviewTitleItem = ({ main, sub }) => {
  return (
    <ReviewItemTitelWrap>
      <ReviewItemTitelMain>{main}</ReviewItemTitelMain>
      <ReviewItemTitelSub>{sub}</ReviewItemTitelSub>
    </ReviewItemTitelWrap>
  );
};

export default ReviewTitleItem;
