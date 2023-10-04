import React from "react";

import Review from "../Review/Review";

import { reviewMOCK } from "../../../../../assets/mock/review.mock.js";

import { ReviewsListWrapper, ReviewsListContainer } from "./ReviewsList.styled";

const ReviewsList = () => {
  return (
    <ReviewsListWrapper>
      <ReviewsListContainer>
        {reviewMOCK.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ReviewsListContainer>
    </ReviewsListWrapper>
  );
};

export default ReviewsList;
