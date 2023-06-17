import React from "react";

import Review from "../../../../../product/Review/Review";

import { reviewMOCK } from "../../../../../../../assets/mock/review.mock";

import { ReviewsLeftContainer, ReviewsLeftWrapper } from "./ReviewsLeft.styled";

const ReviewsLeft = () => {
  return (
    <ReviewsLeftWrapper>
      <ReviewsLeftContainer>
        {reviewMOCK.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ReviewsLeftContainer>
    </ReviewsLeftWrapper>
  );
};

export default ReviewsLeft;
