import React from "react";

import {
  ReviewItemTitleSub,
  ReviewItemTitleMain,
  ReviewItemTitelWrap,
} from "./ReviewItem.styled";

const ReviewTitleItem = ({ main, sub }) => {
  return (
    <ReviewItemTitelWrap>
      <ReviewItemTitleMain>{main}</ReviewItemTitleMain>
      <ReviewItemTitleSub>{sub}</ReviewItemTitleSub>
    </ReviewItemTitelWrap>
  );
};

export default ReviewTitleItem;
