import React from "react";

import Filter from "./Filter/Filter";
import ReviewsList from "./ReviewsList/ReviewsList";
import ReviewsHeader from "./ReviewsHeader/ReviewsHeader";

import { ReviewsContainer, ReviewsWrapper } from "./Reviews.styled";

const Reviews = () => {
  return (
    <ReviewsWrapper>
      <ReviewsContainer>
        <ReviewsHeader />
        <Filter />
        <ReviewsList />
      </ReviewsContainer>
    </ReviewsWrapper>
  );
};

export default Reviews;
