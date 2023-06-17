import React, { useState } from "react";

import {
  ReviewImg,
  ReviewRating,
  ReviewProduct,
  ReviewWrapper,
  ReviewContainer,
  ReviewProductName,
  ReviewImgNameContainer,
} from "./Review.styled";

import { Rate } from "antd";
import ReviewBody from "./ReviewBody";

const Review = ({ review }) => {
  const [showMore, setShowMore] = useState(false);

  const { date, body, raiting, body_img, product_img, product_name } =
    review;

  const showMoreHandler = () => {
    setShowMore((state) => !state);
  };

  return (
    <ReviewWrapper>
      <ReviewContainer>
        <ReviewProduct>
          <ReviewImgNameContainer>
            <ReviewImg src={product_img} />
            <ReviewProductName>{product_name}</ReviewProductName>
          </ReviewImgNameContainer>
          <ReviewRating>
            <Rate defaultValue={raiting} disabled />
          </ReviewRating>
        </ReviewProduct>
        <ReviewBody
          date={date}
          showMore={showMore}
          showMoreHandler={showMoreHandler}
          body={body}
          body_img={body_img}
        />
      </ReviewContainer>
    </ReviewWrapper>
  );
};

export default Review;
