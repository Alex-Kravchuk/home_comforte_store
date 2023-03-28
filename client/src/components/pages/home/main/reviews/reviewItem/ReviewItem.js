import React from "react";
import { Card } from "antd";

import ReviewTitleItem from "./ReviewItemTitle";

import { ReviewItemImg, ReviewItemWrapper } from "./ReviewItem.styled";

const { Meta } = Card;

const ReviewItem = ({ srcImg, title, userName, reviewText }) => {
  return (
    <ReviewItemWrapper cover={<ReviewItemImg src={srcImg} />}>
      <Meta
        title={<ReviewTitleItem main={title} sub={userName} />}
        description={reviewText}
      />
    </ReviewItemWrapper>
  );
};

export default ReviewItem;
