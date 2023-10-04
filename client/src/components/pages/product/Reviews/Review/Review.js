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

import { Avatar, Rate } from "antd";

import ReviewBody from "./ReviewBody";
import ReviewHeader from "./ReviewHeader";

const Review = ({ review }) => {
  const [showMore, setShowMore] = useState(false);

  const {
    date,
    body,
    raiting,
    body_img,
    // user_img,
    // user_name,
    // product_img,
    product_name,
  } = review;

  console.log("s", Boolean(product_name));

  const showMoreHandler = () => {
    setShowMore((state) => !state);
  };

  return (
    <ReviewWrapper>
      <ReviewContainer>
        <ReviewProduct>
          <ReviewImgNameContainer>
            <ReviewHeader
              review={review}
              standartReview={Boolean(product_name)}
            />
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
